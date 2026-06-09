<template>
  <section id="portfolio" class="pt-16 pb-24 bg-[#0d1117]">
    <div class="max-w-6xl mx-auto px-6">

      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-[#e6edf3] tracking-tight">Projekte</h2>
        <div class="flex items-center gap-4 mt-3">
          <div class="h-[2px] w-12 bg-[#e879f9]"></div>
          <p class="font-mono text-[#8b949e] text-sm">// ausgewählte Arbeiten</p>
        </div>
      </div>

      <!-- Filter -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="filter in filters"
          :key="filter.value"
          @click="setFilter(filter.value)"
          :class="[
            'px-4 py-1.5 rounded-md text-xs font-mono transition border',
            activeFilter === filter.value
              ? 'bg-[#e879f9]/20 text-[#e879f9] border-[#e879f9]/50'
              : 'border-[#30363d] bg-[#161b22] text-[#8b949e] hover:border-[#e879f9]/30 hover:text-[#e879f9]'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Grid -->
      <div ref="containerRef" class="relative" :style="{ height: containerHeight + 'px', transition: 'height 0.5s ease' }">
        <div
          v-for="project in projects"
          :key="project.slug"
          class="absolute"
          :style="itemStyle(project)"
        >
          <RouterLink
            :to="`/projekt/${project.slug}`"
            class="group relative overflow-hidden rounded-lg border border-[#30363d] hover:border-[#e879f9]/40 transition-colors duration-300 block w-full h-full bg-[#161b22]"
          >
            <div class="w-full h-full">
              <img
                :src="project.thumb"
                :alt="project.title"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 opacity-0 group-hover:opacity-100"
                @load="e => e.target.classList.replace('opacity-0', 'opacity-75')"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0d1117]/90 via-[#0d1117]/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <div>
                <p class="text-[#e6edf3] font-semibold text-sm">{{ project.title }}</p>
                <p class="text-[#e879f9] text-xs font-mono mt-0.5">{{ project.subtitle }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { projects } from '../data/projects.js';

const activeFilter = ref('all');
const containerRef = ref(null);
const itemPositions = ref({});
const containerHeight = ref(0);
const GAP = 12;

const filters = [
  { label: 'Alle',      value: 'all',      type: 'category' },
  { label: 'Web',       value: 'web',      type: 'category' },
  { label: 'App',       value: 'app',      type: 'category' },
  { label: 'Shop',      value: 'shop',     type: 'category' },
  { label: 'Admin',     value: 'admin',    type: 'category' },
  { label: 'React',     value: 'React',    type: 'tech' },
  { label: 'Vue.js',    value: 'Vue',      type: 'tech' },
  { label: 'Laravel',   value: 'Laravel',  type: 'tech' },
  { label: 'jQuery',    value: 'jQuery',   type: 'tech' },
  { label: 'PHP',       value: 'PHP',      type: 'tech' },
  { label: 'Joomla',    value: 'Joomla',   type: 'tech' },
  { label: 'Nicepage',  value: 'Nicepage', type: 'tech' },
];

function getColumns() {
  const w = window.innerWidth;
  if (w >= 1024) return 4;
  if (w >= 768)  return 3;
  return 2;
}

function matchesFilter(project) {
  if (activeFilter.value === 'all') return true;
  const f = filters.find(f => f.value === activeFilter.value);
  if (f?.type === 'tech') return project.techs.some(t => t.toLowerCase().includes(f.value.toLowerCase()));
  return project.category === activeFilter.value;
}

function calculatePositions() {
  if (!containerRef.value) return;
  const cols   = getColumns();
  const total  = containerRef.value.offsetWidth;
  const w      = (total - GAP * (cols - 1)) / cols;
  const h      = w * (3 / 4);
  const newPos = {};
  let col = 0, row = 0;

  projects.forEach(p => {
    if (matchesFilter(p)) {
      newPos[p.slug] = { x: col * (w + GAP), y: row * (h + GAP), w, h, visible: true };
      col++;
      if (col >= cols) { col = 0; row++; }
    } else {
      newPos[p.slug] = { ...itemPositions.value[p.slug] ?? { x: 0, y: 0, w, h }, visible: false };
    }
  });

  const rows = Math.ceil(projects.filter(p => matchesFilter(p)).length / cols);
  containerHeight.value = rows > 0 ? rows * (h + GAP) - GAP : 0;
  itemPositions.value = newPos;
}

function setFilter(value) { activeFilter.value = value; }

function itemStyle(project) {
  const pos = itemPositions.value[project.slug];
  if (!pos) return { opacity: 0 };
  return {
    width:         pos.w + 'px',
    height:        pos.h + 'px',
    transform:     `translate(${pos.x}px, ${pos.y}px)`,
    opacity:       pos.visible ? 1 : 0,
    pointerEvents: pos.visible ? 'auto' : 'none',
    transition:    'transform 0.5s ease, opacity 0.4s ease',
    zIndex:        pos.visible ? 1 : 0,
  };
}

watch(activeFilter, () => nextTick(calculatePositions));
onMounted(() => { calculatePositions(); window.addEventListener('resize', calculatePositions); });
onUnmounted(() => window.removeEventListener('resize', calculatePositions));
</script>

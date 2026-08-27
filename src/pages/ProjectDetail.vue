<template>
  <div v-if="project" class="bg-[#0d1117] min-h-screen">

    <div class="max-w-6xl mx-auto px-6 py-16">

      <!-- Titel + Zurück -->
      <div class="mb-12">
        <div class="flex items-center gap-6 mb-2">
          <button @click="goBack"
            class="text-[#8b949e] hover:text-[#e879f9] transition font-bold text-2xl shrink-0 cursor-pointer">
            ←
          </button>
          <h1 class="text-4xl md:text-5xl font-bold text-[#e6edf3] tracking-tight">{{ project.title }}</h1>
        </div>
        <span class="font-mono text-[#e879f9] text-xs tracking-widest uppercase ml-[47px]">{{ project.subtitle }}</span>
        <div class="flex flex-wrap gap-6 text-sm text-[#8b949e] font-mono mt-3 ml-[47px]">
          <span v-if="project.zeitraum">// {{ project.zeitraum }}</span>
          <a v-if="project.url" :href="project.url" target="_blank"
            class="text-[#e879f9] hover:text-[#f0abfc] transition">
            → {{ project.url.includes('github.com') ? 'Git Repo' : 'Website ansehen' }}
          </a>
        </div>
        <div class="h-[2px] w-16 bg-[#e879f9] mt-6 ml-[47px]"></div>
      </div>

      <!-- 2-Spalten Layout -->
      <div class="grid md:grid-cols-3 gap-10 mb-16">
        <div class="md:col-span-2 space-y-8">
          <div>
            <h2 class="font-mono text-xs text-[#e879f9] uppercase tracking-widest mb-3">/* Über das Projekt */</h2>
            <p class="text-[#8b949e] leading-relaxed">{{ project.beschreibung }}</p>
          </div>
          <div v-if="project.features?.length">
            <h2 class="font-mono text-xs text-[#e879f9] uppercase tracking-widest mb-3">/* Features */</h2>
            <ul class="space-y-2">
              <li v-for="f in project.features" :key="f" class="flex items-start gap-3 text-[#8b949e]">
                <span class="text-[#e879f9] font-mono shrink-0">→</span>
                {{ f }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 class="font-mono text-xs text-[#e879f9] uppercase tracking-widest mb-3">/* Tech Stack */</h2>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.techs" :key="tech"
              class="border border-[#30363d] bg-[#161b22] text-[#8b949e] text-xs px-3 py-1 rounded-md font-mono hover:border-[#e879f9]/50 hover:text-[#e879f9] transition">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Bildergalerie -->
      <div v-if="project.images.length > 0">
        <h2 class="font-mono text-xs text-[#e879f9] uppercase tracking-widest mb-6">/* Screenshots */</h2>
        <div :class="project.imageFit === 'contain' ? 'flex flex-wrap gap-3' : 'grid grid-cols-2 md:grid-cols-3 gap-3'">
          <div v-for="(img, index) in project.images" :key="index"
            class="rounded-lg border border-[#30363d] cursor-zoom-in hover:border-[#e879f9]/40 transition overflow-hidden bg-[#161b22]"
            @click="openLightbox(index)">
            <img :src="img" :alt="`${project.title} ${index + 1}`"
              :class="['opacity-80 hover:opacity-100 transition', project.imageFit === 'contain' ? 'h-56 w-auto' : 'w-full h-56 object-cover']" />
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <Transition name="fade">
        <div v-if="lightboxIndex !== null"
          class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          @click.self="closeLightbox">
          <button @click="closeLightbox"
            class="absolute top-4 right-6 text-[#8b949e] text-2xl hover:text-[#e879f9] transition font-mono">✕</button>
          <button v-if="lightboxIndex > 0" @click="lightboxIndex--"
            class="absolute left-4 text-[#8b949e] text-3xl hover:text-[#e879f9] transition px-4">‹</button>
          <img :src="project.images[lightboxIndex]" :alt="`${project.title} Vorschau`"
            class="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain border border-[#30363d]" />
          <button v-if="lightboxIndex < project.images.length - 1" @click="lightboxIndex++"
            class="absolute right-4 text-[#8b949e] text-3xl hover:text-[#e879f9] transition px-4">›</button>
        </div>
      </Transition>

      <!-- Prev / Next -->
      <div class="flex justify-between mt-16 pt-8 border-t border-[#30363d]">
        <RouterLink v-if="prevProject" :to="`/projekt/${prevProject.slug}`"
          class="flex items-center gap-2 text-[#8b949e] hover:text-[#e879f9] transition font-mono text-sm">
          ← {{ prevProject.title }}
        </RouterLink>
        <span v-else></span>
        <RouterLink v-if="nextProject" :to="`/projekt/${nextProject.slug}`"
          class="flex items-center gap-2 text-[#8b949e] hover:text-[#e879f9] transition font-mono text-sm">
          {{ nextProject.title }} →
        </RouterLink>
      </div>
    </div>

    <FooterSection />
  </div>

  <div v-else class="min-h-screen bg-[#0d1117] flex items-center justify-center">
    <div class="text-center">
      <p class="text-[#8b949e] font-mono mb-4">// 404 — Projekt nicht gefunden</p>
      <RouterLink to="/" class="text-[#e879f9] hover:text-[#f0abfc] transition font-mono text-sm">← Zurück</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects } from '../data/projects.js';
import FooterSection from '../components/FooterSection.vue';

const route = useRoute();
const router = useRouter();

const project = computed(() => projects.find(p => p.slug === route.params.slug));
const currentIndex = computed(() => projects.findIndex(p => p.slug === route.params.slug));
const prevProject = computed(() => currentIndex.value > 0 ? projects[currentIndex.value - 1] : null);
const nextProject = computed(() => currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null);

const lightboxIndex = ref(null);
function openLightbox(index) { lightboxIndex.value = index; }
function closeLightbox() { lightboxIndex.value = null; }
function goBack() { router.back(); }
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

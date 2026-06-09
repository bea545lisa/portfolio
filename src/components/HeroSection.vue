<template>
  <section class="border-b border-[#30363d] py-20" style="background: linear-gradient(to bottom, #2d3140, #0d1117)">
    <div class="max-w-screen-2xl mx-auto px-6">

      <!-- Terminal-Zeile -->
      <p class="font-mono text-[#8b949e] text-sm mb-4">
        <span class="text-[#e879f9]">~/portfolio</span>
        <span class="text-[#8b949e]"> $ </span>
        <span class="text-[#e6edf3]">whoami</span>
      </p>

      <!-- Name + Untertitel -->
      <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold text-[#e6edf3] mb-2 tracking-tight">
        Bea Lisa
      </h1>
      <p class="font-mono tracking-widest uppercase mb-8 text-[#e879f9]" style="font-size: clamp(0.875rem, 1vw, 1.05rem)">
        Fullstack Web Developer
      </p>

      <!-- Foto + Bio -->
      <div class="flex flex-col md:flex-row md:items-center gap-12 xl:gap-16">

        <!-- Foto -->
        <div class="shrink-0">
          <div class="w-40 h-40 md:w-56 md:h-56 xl:w-64 xl:h-64 rounded-full border-2 border-[#e879f9]/30 overflow-hidden">
            <img :src="'/images/foto.jpg'" alt="Bea Lisa" class="w-full h-full object-cover" style="transform: scale(1.15) translateY(4%)" />
          </div>
        </div>

        <!-- Text -->
        <div class="flex-1 px-8">
          <p class="text-[#8b949e] text-base xl:text-lg leading-relaxed max-w-none">
            Senior Full-Stack Developer mit über 18 Jahren Erfahrung in der Entwicklung komplexer Web- &amp; E-Commerce-Anwendungen. Schwerpunkt auf PHP, Datenbankdesign, Prozessautomatisierung und skalierbaren Webarchitekturen – von der Konzeption bis zum produktiven Betrieb mit CI/CD.
          </p>
          <p class="text-[#8b949e] text-base xl:text-lg leading-relaxed max-w-none mt-3">
            Aktuell Entwicklung eigener Webanwendungen mit Laravel, Vue.js, React, Shopify und GraphQL sowie Einsatz KI-gestützter Tools zur effizienten Umsetzung moderner Softwarelösungen.
          </p>
        </div>

      </div>

        <!-- Tech-Tags -->
        <div class="flex flex-wrap gap-2 mt-6">
            <span v-for="tech in techs" :key="tech"
              class="font-mono text-xs px-3 py-1 rounded-md border border-[#30363d] bg-[#161b22] text-[#8b949e] hover:border-[#e879f9]/50 hover:text-[#e879f9] transition cursor-default">
              {{ tech }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex flex-wrap gap-6 mt-6">
            <a href="mailto:bea.rohrmoser@gmail.com"
              class="font-mono text-sm text-[#e879f9] hover:text-[#f0abfc] transition flex items-center gap-2">
              <span class="opacity-60">✉</span> Schreib mir
            </a>
            <a href="https://github.com/bea545lisa" target="_blank"
              class="font-mono text-sm text-[#8b949e] hover:text-[#e879f9] transition flex items-center gap-2">
              <span class="opacity-60">⌥</span> GitHub
            </a>
            <a href="https://bealisa.com" target="_blank" style="display:none"
              class="font-mono text-sm text-[#8b949e] hover:text-[#e879f9] transition flex items-center gap-2">
              <span class="opacity-60">→</span> bealisa.com
            </a>
          </div>

    </div>
  </section>
</template>

<script setup>
const techs = ['PHP 8', 'Laravel', 'Vue.js', 'React', 'MySQL', 'Tailwind CSS', 'Vite', 'Node.js', 'Shopify', 'GraphQL'];
</script>

<template>
  <section class="border-b border-[#30363d] py-20" style="background: linear-gradient(to bottom, #2d3140, #0d1117)">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Terminal-Zeile -->
      <p class="font-mono text-[#8b949e] text-sm mb-4">
        <span class="text-[#e879f9]">~/portfolio</span>
        <span class="text-[#8b949e]"> $ </span>
        <span class="text-[#e6edf3]">whoami</span>
      </p>

      <!-- Name + Untertitel -->
      <h1 class="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-2 tracking-tight">
        Bea Lisa
      </h1>
      <p class="font-mono text-[#e879f9] text-sm tracking-widest uppercase mb-8">
        Fullstack Web Developer
      </p>

      <!-- Foto + Bio -->
      <div class="flex flex-col md:flex-row md:items-start gap-8">

        <!-- Foto -->
        <div class="shrink-0">
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#e879f9]/30 overflow-hidden">
            <img :src="'/images/foto.jpg'" alt="Bea Lisa" class="w-full h-full object-cover" style="transform: scale(1.15) translateY(4%)" />
          </div>
        </div>

        <!-- Text -->
        <div class="flex-1">
          <p class="text-[#8b949e] text-base leading-relaxed max-w-4xl">
            Senior Full-Stack Developer mit über 18 Jahren Erfahrung in der Entwicklung komplexer Web- &amp; E-Commerce-Anwendungen. Schwerpunkt auf PHP, Datenbankdesign, Prozessautomatisierung und skalierbaren Webarchitekturen – von der Konzeption bis zum produktiven Betrieb mit CI/CD.
          </p>
          <p class="text-[#8b949e] text-base leading-relaxed max-w-4xl mt-3">
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

<template>
  <section class="bg-[#585e60] py-20 px-6">
    <div class="max-w-6xl mx-auto">

      <div class="flex flex-col md:flex-row md:items-center gap-10">

        <!-- Foto-Placeholder -->
        <div class="shrink-0">
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#fb923c]/20 border-2 border-[#fb923c]/40 flex items-center justify-center overflow-hidden">
            <!-- Tausch gegen <img src="/foto.jpg" ...> wenn vorhanden -->
            <svg class="w-16 h-16 text-[#fb923c]/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        </div>

        <!-- Text -->
        <div>
          <p class="font-mono text-[#fb923c] text-sm tracking-widest uppercase mb-2">[ Über mich ]</p>
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Lisa B.</h1>
          <p class="text-white/70 text-base leading-relaxed max-w-2xl">
            Fullstack-Webentwicklerin aus dem Raum München&nbsp;/ Oberland mit über 10 Jahren Erfahrung in der Konzeption und Umsetzung von Webanwendungen, Shops und internen Verwaltungssystemen. Schwerpunkt auf modernen Stacks: Laravel, Vue.js und React.
          </p>

          <!-- Tech-Tags -->
          <div class="flex flex-wrap gap-2 mt-6">
            <span v-for="tech in techs" :key="tech"
              class="font-mono text-xs px-3 py-1 rounded-full border border-white/20 text-white/60 hover:border-[#fb923c]/50 hover:text-[#fb923c] transition">
              {{ tech }}
            </span>
          </div>

          <!-- Kontakt-Links -->
          <div class="flex flex-wrap gap-4 mt-6">
            <a href="mailto:hallo@bealisa.com"
              class="font-mono text-sm text-[#fb923c] hover:text-white transition">
              ✉ hallo@bealisa.com
            </a>
            <a href="https://github.com/bea545lisa" target="_blank"
              class="font-mono text-sm text-white/50 hover:text-[#fb923c] transition">
              ⌥ GitHub
            </a>
            <a href="https://bealisa.com" target="_blank"
              class="font-mono text-sm text-white/50 hover:text-[#fb923c] transition">
              → bealisa.com
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const techs = ['Laravel', 'Vue.js', 'React', 'PHP 8', 'Tailwind CSS', 'MySQL', 'Vite', 'Node.js'];
</script>

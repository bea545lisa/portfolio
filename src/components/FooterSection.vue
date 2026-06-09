<template>
  <footer class="bg-[#585e60] border-t border-white/10 pt-8" style="padding-bottom: max(1.5rem, env(safe-area-inset-bottom))">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-white/50 text-xs font-mono">© {{ year }} Lisa B.</p>
        <div class="flex gap-4 text-xs font-mono">
          <a href="https://bealisa.com" target="_blank" class="text-white/50 hover:text-[#fb923c] transition">bealisa.com</a>
          <a href="https://github.com/bea545lisa" target="_blank" class="text-white/50 hover:text-[#fb923c] transition">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#0d1117] border-t border-[#30363d] py-8 px-6">
    <div class="max-w-6xl mx-auto flex justify-center items-center">
      <p class="font-mono text-[#8b949e] text-xs">
        <span class="text-[#e879f9]">©</span> {{ year }} Bea Lisa
      </p>
      <div class="flex gap-6 font-mono text-xs" style="display:none">
        <a href="https://bealisa.com" target="_blank" class="text-[#8b949e] hover:text-[#e879f9] transition">bealisa.com</a>
        <a href="https://github.com/bea545lisa" target="_blank" class="text-[#8b949e] hover:text-[#e879f9] transition">github</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

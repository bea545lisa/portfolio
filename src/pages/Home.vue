<template>
  <div class="min-h-screen flex flex-col">
    <HeroSection />
    <PortfolioSection class="flex-1" />
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import PortfolioSection from '../components/PortfolioSection.vue';
import FooterSection from '../components/FooterSection.vue';
</script>

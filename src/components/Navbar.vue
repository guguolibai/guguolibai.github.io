<template>
  <nav class="fixed top-0 w-full z-[100] px-6 py-5 transition-all duration-300"
    :class="scrolled ? 'bg-white/70 backdrop-blur-md border-b border-black/5' : ''">
    <div class="max-w-5xl mx-auto flex justify-between items-center">
      <router-link to="/" class="font-mono text-sm accent">~/portfolio</router-link>
      <div class="hidden md:flex gap-8">
        <router-link v-for="link in links" :key="link.to" :to="link.to"
          class="text-sm text-[#52525b] hover:text-[#6366f1] transition-colors duration-300"
          active-class="!text-[#6366f1]">
          {{ link.label }}
        </router-link>
      </div>
      <button @click="menuOpen = !menuOpen" class="md:hidden text-[#52525b] hover:text-[#18181b] transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" class="md:hidden mt-4 flex flex-col gap-3 pb-4">
      <router-link v-for="link in links" :key="link.to" :to="link.to"
        @click="menuOpen = false"
        class="text-sm text-[#52525b] hover:text-[#6366f1] transition-colors pl-4 border-l border-transparent hover:border-[#6366f1]/30">
        {{ link.label }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { to: '/', label: '首页' },
  { to: '/skills', label: '技能' },
  { to: '/papers', label: '论文' },
  { to: '/projects', label: '项目' },
  { to: '/timeline', label: '经历' },
]

const onScroll = () => { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

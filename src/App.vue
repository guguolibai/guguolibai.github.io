<template>
  <div class="min-h-screen relative text-[#18181b] bg-[#fbfbff] overflow-hidden">
    <div class="mouse-glow" :style="glowStyle"></div>
    <ParticlesBg />
    <BackgroundEffects />
    <div class="relative z-10">
      <Navbar />
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ParticlesBg from './components/ParticlesBg.vue'
import BackgroundEffects from './components/BackgroundEffects.vue'
import Navbar from './components/Navbar.vue'

const mousePos = ref({ x: 0, y: 0 })
const updateMouse = (e) => { mousePos.value = { x: e.clientX, y: e.clientY } }

onMounted(() => window.addEventListener('mousemove', updateMouse))
onUnmounted(() => window.removeEventListener('mousemove', updateMouse))

const glowStyle = computed(() => ({
  transform: `translate(${mousePos.value.x - 250}px, ${mousePos.value.y - 250}px)`,
}))
</script>

<style scoped>
.mouse-glow {
  position: fixed;
  top: 0; left: 0;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, rgba(236, 72, 153, 0.02) 50%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  transition: transform 0.2s cubic-bezier(0.2, 0, 0.2, 1);
  will-change: transform;
}
</style>

<template>
  <vue-particles
    :id="particlesId"
    :key="particlesId"
    :options="particlesOptions"
    class="fixed inset-0 z-0"
  />
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getThemeByRoute, buildParticlesOptions } from '../themes'

const route = useRoute()
const counter = ref(0)

const currentTheme = computed(() => getThemeByRoute(route.path))
const particlesOptions = computed(() => buildParticlesOptions(currentTheme.value))
const particlesId = computed(() => `tsparticles-${route.path.replace('/', '') || 'home'}-${counter.value}`)

watch(() => route.path, () => {
  counter.value++
})
</script>

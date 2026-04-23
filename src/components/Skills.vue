<template>
  <section class="pt-32 pb-28 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#18181b] mb-2 tracking-tight">技术栈</h2>
      <p class="text-sm text-[#52525b] mb-12">日常使用的技术和工具</p>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="skill in skills" :key="skill.name"
          class="skill-card card p-6 group flex flex-col">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-sm font-medium text-[#18181b]">{{ skill.name }}</h3>
            <span class="font-mono text-xs text-[#6366f1] tracking-wider">{{ skill.level }}%</span>
          </div>
          <div class="w-full bg-gray-200/50 rounded-full h-1 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] transition-all duration-1000"
              :style="{ width: skill.level + '%' }" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const skills = []

onMounted(() => {
  gsap.fromTo('.skill-card',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out', clearProps: 'all' }
  )
})
</script>

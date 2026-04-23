<template>
  <section class="relative min-h-screen flex items-center justify-center pt-20 px-6">
    <div class="max-w-3xl mx-auto">
      <p class="hero-greeting font-mono text-sm accent mb-6 tracking-wider">你好，我是</p>
      <h1 class="hero-name text-5xl md:text-7xl font-semibold text-[#18181b] mb-4 tracking-tighter">
        你的名字
      </h1>
      <h2 class="hero-role text-3xl md:text-5xl font-light text-[#52525b] mb-8 tracking-tight">
        软件工程学生 & 科研工作者
      </h2>
      <p class="hero-desc text-[#52525b] max-w-xl mb-12 leading-relaxed tracking-normal">
        热爱用代码创造美好事物。专注于构建高性能、优雅的 Web 应用，追求技术与设计的完美融合。目前专注于深度学习与前端工程化方向的研究。
      </p>
      <div class="hero-cta flex gap-4 flex-wrap">
        <router-link to="/projects"
          class="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white text-sm font-mono hover:opacity-90 transition-all duration-300 shadow-lg shadow-indigo-200/50">
          查看作品
        </router-link>
        <router-link to="/papers"
          class="px-6 py-3 rounded-lg border border-[#6366f1]/30 text-[#6366f1] text-sm font-mono hover:bg-[#6366f1]/5 transition-all duration-300">
          论文分享
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.from('.hero-greeting', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
  gsap.from('.hero-name', { y: 30, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' })
  gsap.from('.hero-role', { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' })
  gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, delay: 0.45, ease: 'power3.out' })
  gsap.from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' })
})
</script>

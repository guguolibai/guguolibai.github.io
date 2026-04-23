<template>
  <section class="pt-32 pb-28 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#18181b] mb-2 tracking-tight">经历</h2>
      <p class="text-sm text-[#52525b] mb-12">成长路上的重要节点</p>

      <div class="relative pl-6 border-l border-[#6366f1]/15">
        <div v-for="item in timeline" :key="item.title"
          class="timeline-item relative mb-10 last:mb-0">
          <div class="absolute -left-[25px] top-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899]" />
          <span class="font-mono text-xs accent block mb-1">{{ item.year }}</span>
          <h3 class="text-[#18181b] font-medium mb-1">{{ item.title }}</h3>
          <p class="text-sm text-[#52525b] leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const timeline = [
  { year: '2024 - 至今', title: '高级前端工程师 @ 某科技公司', desc: '负责核心产品前端架构设计，带领团队完成多个重要项目。' },
  { year: '2022 - 2024', title: '全栈开发者 @ 创业公司', desc: '从零搭建产品技术栈，独立完成前后端开发和部署。' },
  { year: '2020 - 2022', title: '前端开发工程师 @ 互联网公司', desc: '参与大型 SPA 应用开发，优化性能和用户体验。' },
  { year: '2016 - 2020', title: '计算机科学学士 @ 某大学', desc: '系统学习计算机基础知识，参与多个开源项目。' },
]

onMounted(() => {
  gsap.fromTo('.timeline-item',
    { x: -15, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', clearProps: 'all' }
  )
})
</script>

<template>
  <section class="pt-32 pb-28 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#18181b] mb-2 tracking-tight">项目作品</h2>
      <p class="text-sm text-[#52525b] mb-12">精选项目展示</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="project in projects" :key="project.title"
          class="project-card card p-8 flex flex-col group border-l-4 border-l-transparent hover:border-l-[#6366f1]">
          <div class="flex items-center justify-between mb-4">
            <svg class="w-5 h-5 text-[#6366f1]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
            </svg>
            <div class="flex gap-3">
              <a href="#" class="text-[#52525b] hover:text-[#6366f1] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
              </a>
              <a href="#" class="text-[#52525b] hover:text-[#6366f1] transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
          <h3 class="text-[#18181b] font-medium mb-2 group-hover:text-[#6366f1] transition-colors">{{ project.title }}</h3>
          <p class="text-sm text-[#52525b] leading-relaxed mb-6 flex-1">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag"
              class="px-2 py-1 rounded-md bg-[#6366f1]/5 text-[#6366f1] text-[10px] uppercase tracking-wider font-semibold">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const projects = [
  { title: '智能数据可视化平台', desc: '基于 Vue 3 和 D3.js 构建的实时数据可视化仪表盘，支持多种图表类型和自定义主题。', tags: ['Vue 3', 'D3.js', 'WebSocket'] },
  { title: 'AI 聊天助手', desc: '集成大语言模型的智能对话应用，支持上下文记忆和多轮对话。', tags: ['React', 'Node.js', 'LLM'] },
  { title: '开源组件库', desc: '一套精心设计的 UI 组件库，包含 30+ 组件，支持主题定制和暗色模式。', tags: ['TypeScript', 'Storybook', 'Vite'] },
]

onMounted(() => {
  gsap.fromTo('.project-card',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', clearProps: 'all' }
  )
})
</script>

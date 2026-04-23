<template>
  <div>
    <Hero />

    <section class="py-32 px-6">
      <div class="max-w-4xl mx-auto space-y-32">

        <div class="reveal-section">
          <SectionHeader title="技能" to="/skills" />
          <router-link to="/skills" class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="skill in previewSkills" :key="skill.name"
              class="card p-5 text-center cursor-pointer">
              <p class="text-sm text-[#18181b]">{{ skill.name }}</p>
            </div>
          </router-link>
        </div>

        <div class="reveal-section">
          <SectionHeader title="论文阅读" to="/papers" />
          <router-link to="/papers" class="space-y-3 block">
            <div v-for="paper in previewPapers" :key="paper.title" class="card p-5 cursor-pointer">
              <span class="font-mono text-xs accent">{{ paper.venue }} · {{ paper.year }}</span>
              <h3 class="text-sm text-[#18181b] mt-1">{{ paper.title }}</h3>
            </div>
          </router-link>
        </div>

        <div class="reveal-section">
          <SectionHeader title="项目" to="/projects" />
          <router-link to="/projects" class="grid md:grid-cols-3 gap-4">
            <div v-for="project in previewProjects" :key="project.title" class="card p-6 cursor-pointer">
              <h3 class="text-sm font-medium text-[#18181b] mb-1">{{ project.title }}</h3>
              <p class="text-xs text-[#52525b]">{{ project.tech }}</p>
            </div>
          </router-link>
        </div>

        <div class="reveal-section">
          <SectionHeader title="经历" to="/timeline" />
          <router-link to="/timeline" class="space-y-3 block">
            <div v-for="item in previewTimeline" :key="item.title" class="card p-5 flex items-center gap-4 cursor-pointer">
              <span class="font-mono text-xs accent shrink-0">{{ item.year }}</span>
              <h3 class="text-sm text-[#18181b]">{{ item.title }}</h3>
            </div>
          </router-link>
        </div>

      </div>
    </section>

    <Contact />
  </div>
</template>

<script setup>
import Hero from './Hero.vue'
import Contact from './Contact.vue'
import SectionHeader from './SectionHeader.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.reveal-section').forEach((el) => {
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    )
  })
})

const previewSkills = [
  { name: 'JavaScript' }, { name: 'Vue.js' }, { name: 'TypeScript' }, { name: 'Python' },
]
const previewPapers = [
  { title: 'Attention Is All You Need', venue: 'NeurIPS', year: '2017' },
  { title: 'BERT: Pre-training of Deep Bidirectional Transformers', venue: 'NAACL', year: '2019' },
]
const previewProjects = [
  { title: '多模态面试 Agent 智能体', tech: 'LLM · Agent · 多模态' },
  { title: 'AI 聊天助手', tech: 'React · Node.js · LLM' },
  { title: '开源组件库', tech: 'TypeScript · Vite' },
]
const previewTimeline = [
  { year: '2024', title: '高级前端工程师 @ 某科技公司' },
  { year: '2022', title: '全栈开发者 @ 创业公司' },
]
</script>

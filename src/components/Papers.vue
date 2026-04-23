<template>
  <section class="pt-32 pb-28 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-semibold text-[#18181b] mb-2 tracking-tight">论文阅读</h2>
      <p class="text-sm text-[#52525b] mb-12">阅读笔记与分享</p>

      <div class="space-y-4">
        <div v-for="paper in papers" :key="paper.title"
          class="paper-card card p-8 group">
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="font-mono text-xs accent">{{ paper.venue }}</span>
                <span class="font-mono text-xs text-[#52525b]">{{ paper.year }}</span>
              </div>
              <h3 class="text-[#18181b] font-medium mb-2 group-hover:text-[#6366f1] transition-colors">
                {{ paper.title }}
              </h3>
              <p class="text-sm text-[#52525b] leading-relaxed mb-3">{{ paper.summary }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in paper.tags" :key="tag"
                  class="font-mono text-xs px-2 py-0.5 rounded border border-[#6366f1]/15 text-[#6366f1]/80">
                  {{ tag }}
                </span>
              </div>
            </div>
            <a v-if="paper.link" :href="paper.link" target="_blank" rel="noopener"
              class="shrink-0 text-[#52525b] hover:text-[#6366f1] transition-colors mt-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const papers = [
  { title: 'Attention Is All You Need', venue: 'NeurIPS', year: '2017', summary: '提出 Transformer 架构，用自注意力机制完全替代 RNN/CNN，成为现代 NLP 的基石。', tags: ['Transformer', 'NLP', 'Attention'], link: '#' },
  { title: 'BERT: Pre-training of Deep Bidirectional Transformers', venue: 'NAACL', year: '2019', summary: '双向预训练语言模型，通过 MLM 和 NSP 任务学习深层语义表示。', tags: ['Pre-training', 'NLP', 'BERT'], link: '#' },
  { title: 'Generative Adversarial Networks', venue: 'NeurIPS', year: '2014', summary: '提出对抗训练框架，生成器与判别器博弈，开创生成模型新范式。', tags: ['GAN', 'Generative Model'], link: '#' },
  { title: 'Deep Residual Learning for Image Recognition', venue: 'CVPR', year: '2016', summary: '引入残差连接解决深层网络退化问题，使训练上百层网络成为可能。', tags: ['ResNet', 'CV', 'Deep Learning'], link: '#' },
]

onMounted(() => {
  gsap.fromTo('.paper-card',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', clearProps: 'all' }
  )
})
</script>

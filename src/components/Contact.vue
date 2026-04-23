<template>
  <section class="py-24 px-6">
    <div class="max-w-3xl mx-auto text-center">
      <p class="font-mono text-sm accent mb-4">联系方式</p>
      <h2 class="text-3xl md:text-4xl font-light text-[#18181b] mb-6">Get In Touch</h2>
      <p class="text-[#52525b] mb-10 max-w-md mx-auto leading-relaxed">
        有合作想法或者只是想打个招呼？随时联系我。
      </p>
      <a href="mailto:your@email.com"
        class="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#18181b] text-white hover:bg-[#1e1e23] transition-all duration-300 shadow-lg">
        <span class="font-mono text-sm">Send me an email</span>
        <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
      </a>

      <div class="flex justify-center gap-6 mt-12">
        <a v-for="link in socials" :key="link.label" :href="link.href"
          target="_blank" rel="noopener"
          class="text-[#52525b] hover:text-[#6366f1] transition-colors duration-300">
          <span class="font-mono text-xs">{{ link.label }}</span>
        </a>
      </div>

      <p class="mt-16 font-mono text-xs text-[#52525b]/50">
        Built with Vue & Tailwind CSS
      </p>
    </div>
  </section>
</template>

<script setup>
const socials = [
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Twitter', href: 'https://twitter.com/yourusername' },
]
</script>

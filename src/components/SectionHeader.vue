<template>
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-xl font-semibold text-[#18181b]">{{ title }}</h2>
    <router-link :to="to" class="font-mono text-xs accent hover:underline underline-offset-4 transition-all">
      查看全部 →
    </router-link>
  </div>
</template>

<script setup>
defineProps({ title: String, to: String })
</script>

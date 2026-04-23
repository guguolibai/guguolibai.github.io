<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/60 blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-100/50 blur-[120px] animate-pulse delay-pulse"></div>
  </div>
</template>

<style scoped>
.delay-pulse { animation-delay: 3s; }
</style>

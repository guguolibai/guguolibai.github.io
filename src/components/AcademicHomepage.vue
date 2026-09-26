<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { copy, news, profile, publications, research } from '../content'

const menuOpen = ref(false)
const active = ref('about')
const navigation = Object.entries(copy.nav).filter(([id]) => (id !== 'publications' || publications.length) && (id !== 'news' || news.length))
let observer

onMounted(() => {
  document.documentElement.lang = 'en'
  document.title = `${profile.name} - Homepage`
  document.querySelector('meta[name="description"]')?.setAttribute('content', profile.bio)
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) active.value = entry.target.id
  }, { rootMargin: '-60px 0px -55% 0px', threshold: 0 })
  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="home-link" href="#about" @click="menuOpen = false">Homepage</a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a v-for="[id, label] in navigation" :key="id" :href="`#${id}`" :aria-current="active === id ? 'location' : undefined">{{ label }}</a>
      </nav>
      <button class="menu-button" aria-label="Toggle navigation" :aria-expanded="menuOpen" aria-controls="mobile-nav" @click="menuOpen = !menuOpen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path :d="menuOpen ? 'm6 6 12 12M6 18 18 6' : 'M3 6h18M3 12h18M3 18h18'" /></svg>
      </button>
    </div>
    <nav v-if="menuOpen" id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">
      <a v-for="[id, label] in navigation" :key="id" :href="`#${id}`" @click="menuOpen = false">{{ label }}</a>
    </nav>
  </header>

  <div class="page-layout">
    <aside class="profile-sidebar" :aria-label="profile.name">
      <div class="profile-identity">
        <img class="author-avatar" :src="profile.avatar" :alt="`${profile.name} GitHub avatar`" width="175" height="175" />
        <div class="identity-text">
          <h1 class="author-name">{{ profile.name }}</h1>
          <p class="author-bio">{{ profile.affiliation }}</p>
          <p class="author-major">{{ profile.major }}</p>
        </div>
      </div>
      <div class="sidebar-details">
        <p class="profile-interests"><span aria-hidden="true">🔬</span> Graph Learning, LLM, Agent</p>
        <div class="profile-links">
          <a v-if="profile.email" :href="`mailto:${profile.email}`" :aria-label="`Email: ${profile.email}`"><i class="reference-icon icon-envelope" aria-hidden="true"></i><span>Email</span></a>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="reference-icon reference-brand icon-github" aria-hidden="true"></i><span>GitHub</span></a>
          <a v-if="profile.cv" :href="profile.cv" target="_blank" rel="noopener noreferrer"><i class="reference-icon icon-file-alt" aria-hidden="true"></i>CV</a>
          <a v-if="profile.scholar" :href="profile.scholar" target="_blank" rel="noopener noreferrer"><i class="reference-icon icon-graduation-cap" aria-hidden="true"></i>Google Scholar</a>
        </div>
      </div>
    </aside>

    <main id="main-content">
      <section id="about" aria-label="About Me">
        <p class="about-description">{{ profile.bio }}</p>
      </section>

      <section v-if="news.length" id="news" class="content-section">
        <h2 class="section-title"><span class="section-icon" aria-hidden="true">📣</span> {{ copy.news }}</h2>
        <ul class="news-list">
          <li v-for="item in news" :key="`${item.date}-${item.text}`"><strong>[{{ item.date }}]</strong> {{ item.text }}</li>
        </ul>
      </section>

      <section id="research" class="content-section">
        <h2 class="section-title"><span class="section-icon" aria-hidden="true">🔬</span> {{ copy.interests }}</h2>
        <ul class="research-list">
          <li v-for="item in research" :key="item.short"><strong>{{ item.title }}.</strong> {{ item.description }}</li>
        </ul>
      </section>

      <section v-if="publications.length" id="publications" class="content-section">
        <h2 class="section-title"><span class="section-icon" aria-hidden="true">📑</span> {{ copy.publications }}</h2>
        <article v-for="paper in publications" :key="paper.title" class="publication-row" :class="{ 'without-image': !paper.image }">
          <div v-if="paper.image" class="paper-figure">
            <span class="paper-badge">{{ [paper.venue, paper.year].filter(Boolean).join(' ') }}</span>
            <a :href="paper.image" target="_blank" rel="noopener noreferrer" :aria-label="`View framework figure: ${paper.title}`"><img class="paper-image" :src="paper.image" :alt="paper.imageAlt || paper.title" loading="lazy" /></a>
          </div>
          <div class="publication-content">
            <p v-if="!paper.image" class="publication-venue">{{ paper.venue }} {{ paper.year }}</p>
            <h3 class="paper-title"><a v-if="paper.links?.paper" :href="paper.links.paper" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a><template v-else>{{ paper.title }}</template></h3>
            <p v-if="paper.authors?.length" class="paper-authors"><template v-for="(author, index) in paper.authors" :key="index"><span v-if="index">, </span><strong v-if="author.includes(profile.name)">{{ author }}</strong><span v-else>{{ author }}</span></template></p>
            <p v-if="paper.description" class="paper-description">{{ paper.description }}</p>
            <p v-if="paper.links" class="paper-links"><span v-for="(url, label) in paper.links" :key="label">[<a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">{{ label }}</a><span v-else class="disabled-paper-link" role="link" aria-disabled="true" title="Not publicly available yet">{{ label }}</span>]</span></p>
          </div>
        </article>
      </section>

      <section id="education" class="content-section">
        <h2 class="section-title"><span class="section-icon" aria-hidden="true">🎓</span> {{ copy.education }}</h2>
        <ul><li>{{ profile.educationDates }}, {{ profile.major }}, {{ profile.affiliation }}.</li></ul>
      </section>

      <section id="contact" class="content-section">
        <h2 class="section-title"><i class="reference-icon icon-envelope" aria-hidden="true"></i> {{ copy.contact }}</h2>
        <p>{{ copy.contactBody }}</p>
        <p v-if="profile.email">Email: <a :href="`mailto:${profile.email}`">{{ profile.email }}</a></p>
      </section>
      <footer class="page-footer"><span>© {{ new Date().getFullYear() }} {{ profile.name }}</span><a href="#about">Back to top ↑</a></footer>
    </main>
  </div>
</template>

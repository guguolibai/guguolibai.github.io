<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { analytics } from '../content'

const configured = /^[A-Za-z0-9_-]+$/.test(analytics.mapId)
const showSection = configured || import.meta.env.DEV
const widgetHost = ref(null)
const state = ref('pending')
let widgetObserver
let loadingTimeout
let widgetScript

onMounted(() => {
  // Preview visits must not inflate the public site's visitor count.
  if (!configured || location.hostname !== analytics.hostname) return

  state.value = 'loading'
  const host = widgetHost.value
  const checkReady = () => {
    const counter = host.querySelector('.mapmyvisitors-visitors')?.textContent.trim()
    if (counter && /\d/.test(counter)) {
      state.value = 'ready'
      clearTimeout(loadingTimeout)
      widgetObserver?.disconnect()
      const statisticsLink = host.querySelector('#mapmyvisitors-widget')
      if (statisticsLink) {
        statisticsLink.target = '_blank'
        statisticsLink.rel = 'noopener noreferrer'
        statisticsLink.setAttribute('aria-label', 'View visitor statistics on MapMyVisitors')
        if (statisticsLink.href.startsWith('http://mapmyvisitors.com/')) {
          statisticsLink.href = statisticsLink.href.replace('http:', 'https:')
        }
      }
    }
  }
  widgetObserver = new MutationObserver(checkReady)
  widgetObserver.observe(host, { childList: true, subtree: true, characterData: true })

  const source = new URL('https://mapmyvisitors.com/map.js')
  source.search = new URLSearchParams({ d: analytics.mapId, cl: 'ffffff', w: 'a' }).toString()
  widgetScript = document.createElement('script')
  widgetScript.id = 'mapmyvisitors'
  widgetScript.src = source.href
  widgetScript.async = true
  widgetScript.onerror = () => {
    clearTimeout(loadingTimeout)
    state.value = 'error'
  }
  loadingTimeout = setTimeout(() => { state.value = 'error' }, 20000)
  host.appendChild(widgetScript)
})

onUnmounted(() => {
  widgetObserver?.disconnect()
  clearTimeout(loadingTimeout)
  widgetScript?.remove()
})
</script>

<template>
  <section v-if="showSection" class="site-analytics" aria-labelledby="analytics-title">
    <h2 id="analytics-title"><strong>Site Analytics</strong><span v-if="analytics.since"> (since {{ analytics.since }})</span></h2>
    <div class="analytics-map-frame" :class="{ 'analytics-pending': state === 'pending' }">
      <div ref="widgetHost" class="analytics-widget" :class="{ 'analytics-loading': state !== 'ready' }" />
      <p v-if="state === 'pending'" class="analytics-message">{{ configured ? 'Visitor statistics are shown on the public website.' : 'Visitor statistics will appear here once connected.' }}</p>
      <p v-else-if="state === 'loading'" class="analytics-message" role="status">Loading visitor map…</p>
      <p v-else-if="state === 'error'" class="analytics-message" role="status">Visitor statistics are temporarily unavailable.</p>
    </div>
  </section>
</template>

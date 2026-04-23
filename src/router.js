import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import Papers from './components/Papers.vue'
import Projects from './components/Projects.vue'
import Timeline from './components/Timeline.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/papers', component: Papers },
  { path: '/projects', component: Projects },
  { path: '/timeline', component: Timeline },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

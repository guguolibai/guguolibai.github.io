const baseParticles = {
  color: ['#6366f1', '#ec4899'],
  links: { color: '#6366f1', opacity: 0.1, distance: 160 },
}

export const themes = {
  home: {
    particles: {
      ...baseParticles,
      number: 35,
      speed: 0.4,
      size: { min: 2, max: 4 },
      direction: 'none',
      hover: 'grab',
      click: 'push',
    },
  },
  skills: {
    particles: {
      ...baseParticles,
      number: 28,
      speed: 0.6,
      size: { min: 2, max: 3.5 },
      direction: 'top',
      hover: 'bubble',
      click: 'push',
    },
  },
  papers: {
    particles: {
      ...baseParticles,
      links: { color: '#6366f1', opacity: 0.06, distance: 200 },
      number: 14,
      speed: 0.2,
      size: { min: 1.5, max: 3 },
      direction: 'none',
      hover: 'grab',
      click: 'push',
    },
  },
  projects: {
    particles: {
      ...baseParticles,
      number: 42,
      speed: 1,
      size: { min: 2, max: 3.5 },
      direction: 'none',
      hover: 'repulse',
      click: 'push',
    },
  },
  timeline: {
    particles: {
      ...baseParticles,
      number: 24,
      speed: 1.2,
      size: { min: 2, max: 3 },
      direction: 'right',
      hover: 'grab',
      click: 'push',
    },
  },
}

export function getThemeByRoute(path) {
  const map = { '/': 'home', '/skills': 'skills', '/papers': 'papers', '/projects': 'projects', '/timeline': 'timeline' }
  return themes[map[path] || 'home']
}

export function buildParticlesOptions(theme) {
  const p = theme.particles
  return {
    fullScreen: false,
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      color: { value: p.color },
      links: {
        color: p.links?.color || baseParticles.links.color,
        distance: p.links?.distance || baseParticles.links.distance,
        enable: true,
        opacity: p.links?.opacity ? p.links.opacity + 0.05 : baseParticles.links.opacity + 0.05,
        width: 1,
      },
      move: {
        enable: true,
        speed: p.speed,
        direction: p.direction,
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
      number: { value: p.number, density: { enable: true, area: 900 } },
      opacity: { value: { min: 0.4, max: 0.7 }, animation: { enable: true, speed: 0.5, minimumValue: 0.3 } },
      shape: { type: 'circle' },
      size: { value: p.size, animation: { enable: true, speed: 2, minimumValue: 1 } },
      shadow: {
        enable: true,
        color: '#6366f1',
        blur: 5,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: p.hover },
        onClick: { enable: true, mode: p.click },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.4 } },
        bubble: { distance: 150, size: 6, duration: 2, opacity: 0.4 },
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 2 },
      },
    },
    detectRetina: true,
  }
}

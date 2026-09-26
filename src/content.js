// Public profile and research content. Empty links stay hidden.
export const profile = {
  name: 'Yaoyuzhi Wang',
  github: 'https://github.com/guguolibai',
  avatar: '/images/avatar.jpg',
  email: 'wangyaoyuzhi@stu.scu.edu.cn',
  cv: '',
  scholar: '',
  affiliation: 'Sichuan University',
  major: 'Computer Science and Technology',
  educationDates: '2023–2027',
  bio: 'Hi! I am a student in Computer Science and Technology at Sichuan University (2023–2027). My research interests include graph learning, large language models (LLMs), and AI agents.',
}

export const research = [
  { short: 'Graph Learning', title: 'Graph Learning', description: 'Representation learning and predictive modeling for graph-structured data.' },
  { short: 'LLM', title: 'Large Language Models (LLMs)', description: 'Language understanding, generation, and reasoning with large language models.' },
  { short: 'Agent', title: 'AI Agents', description: 'Decision-making, tool use, and task execution with language-model-based agents.' },
]

// Use the confirmed year until a more specific acceptance date is provided.
export const news = [
  { date: '2026', text: 'Our paper DUET has been accepted to ACM Multimedia 2026!' },
]

// Details transcribed from the supplied PDF. ACM MM 2026 confirmed by the owner.
// DOI and code links are omitted because they currently return HTTP 404.
export const publications = [
  {
    title: 'DUET: Dual-view Uncertainty Driven Entrusted Teaching for Contrastive Deep Graph Clustering',
    authors: ['Yaoyuzhi Wang', 'Siyu Yi', 'Yifan Wang', 'Ziyue Qiao', 'Xianggen Liu', 'Wei Ju'],
    venue: 'ACM MM',
    year: '2026',
    image: '/images/duet-framework.png',
    imageAlt: 'DUET framework: dual-view encoding and contrastive alignment, Gamma-based hard sample selection, entrusted teaching, and cross-attention fusion.',
    description: 'A contrastive graph clustering framework that aligns structural and attribute views, identifies trustworthy hard samples, and resolves cross-view conflicts through uncertainty-driven entrusted teaching before fusion.',
    links: { paper: null }, // Keep disabled until the owner authorizes release.
  },
]

export const copy = {
  nav: { about: 'About Me', news: "What's New", research: 'Research', publications: 'Publications', education: 'Education', contact: 'Contact' },
  news: "What's New",
  interests: 'Research Interests',
  publications: 'Publications',
  education: 'Education',
  contact: 'Contact',
  contactBody: 'I welcome conversations about graph learning, LLMs, and AI agents.',
}

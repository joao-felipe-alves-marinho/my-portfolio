export interface Project {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  stack: string[]
  coverImage?: string
  repoUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    shortDescription: 'A modern, responsive portfolio website showcasing full-stack development skills with multilingual support and dark mode.',
    longDescription: 'A personal portfolio built with modern web technologies. Features include a responsive hero section, project showcase, technology skills organized by categories, contact section, and comprehensive i18n support for English, Portuguese, and Spanish. Implements smooth hash navigation, dark/light theme toggle, and optimized performance with Vite build system.',
    stack: ['React', 'TypeScript', 'Vite', 'Mantine UI', 'TanStack Router', 'i18next'],
    coverImage: '',
    repoUrl: 'https://github.com/joao-felipe-alves-marinho/my-portfolio',
    liveUrl: '',
    featured: true,
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 3)
}

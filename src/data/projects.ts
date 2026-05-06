export type ProjectLanguage = 'en' | 'pt' | 'es'

export interface ProjectContent {
  title: string
  shortDescription: string
  longDescription: string
}

export interface Project {
  slug: string
  stack: string[]
  coverImage?: string
  repoUrl?: string
  liveUrl?: string
  featured: boolean
  translations: Record<ProjectLanguage, ProjectContent>
}

export function getProjectLanguage(language: string): ProjectLanguage {
  const normalizedLanguage = language.toLowerCase()

  if (normalizedLanguage.startsWith('pt')) {
    return 'pt'
  }

  if (normalizedLanguage.startsWith('es')) {
    return 'es'
  }

  return 'en'
}

export function getProjectContent(project: Project, language: string): ProjectContent {
  return project.translations[getProjectLanguage(language)]
}

export const projects: Project[] = [
  {
    slug: 'ticket-ddh-es',
    translations: {
      en: {
        title: 'IssueFlow',
        shortDescription: 'A ticket system built to practice Event Sourcing, CQRS, and layered architecture with a NestJS backend.',
        longDescription: 'IssueFlow is a learning project built to practice Event Sourcing, CQRS, and layered architecture in a real ticket management flow. The backend uses NestJS with a domain layer, application layer, and infrastructure layer. KurrentDB stores the event stream as the source of truth, while MongoDB stores read models built by projectors. The frontend is a Next.js UI that talks to the API and displays the projected data.',
      },
      pt: {
        title: 'IssueFlow',
        shortDescription: 'Um sistema de tickets criado para praticar Event Sourcing, CQRS e arquitetura em camadas com backend NestJS.',
        longDescription: 'IssueFlow é um projeto de aprendizado feito para praticar Event Sourcing, CQRS e arquitetura em camadas em um fluxo real de gerenciamento de tickets. O backend usa NestJS com camada de domínio, aplicação e infraestrutura. O KurrentDB guarda o fluxo de eventos como fonte da verdade, enquanto o MongoDB armazena os read models criados pelos projectors. O frontend é uma UI em Next.js que consome a API e exibe os dados projetados.',
      },
      es: {
        title: 'IssueFlow',
        shortDescription: 'Un sistema de tickets creado para practicar Event Sourcing, CQRS y arquitectura en capas con backend NestJS.',
        longDescription: 'IssueFlow es un proyecto de aprendizaje hecho para practicar Event Sourcing, CQRS y arquitectura en capas en un flujo real de gestión de tickets. El backend usa NestJS con capa de dominio, aplicación e infraestructura. KurrentDB guarda el flujo de eventos como fuente de verdad, mientras MongoDB almacena read models creados por los projectors. El frontend es una UI en Next.js que consume la API y muestra los datos proyectados.',
      },
    },
    stack: ['NestJS', 'TypeScript', 'KurrentDB', 'MongoDB', 'Mongoose', '@nestjs/cqrs', 'Next.js'],
    coverImage: '',
    repoUrl: 'https://github.com/joao-felipe-alves-marinho/ticket-ddh-es',
    liveUrl: '',
    featured: true,
  },
  {
    slug: 'portfolio',
    translations: {
      en: {
        title: 'Personal Portfolio',
        shortDescription: 'A modern, responsive portfolio website showcasing full-stack development skills with multilingual support and dark mode.',
        longDescription: 'A personal portfolio built with modern web technologies. Features include a responsive hero section, project showcase, technology skills organized by categories, contact section, and comprehensive i18n support for English, Portuguese, and Spanish. Implements smooth hash navigation, dark/light theme toggle, and optimized performance with Vite build system.',
      },
      pt: {
        title: 'Portfólio Pessoal',
        shortDescription: 'Um portfólio moderno e responsivo, com suporte multilíngue e modo escuro, para apresentar habilidades full stack.',
        longDescription: 'Um portfólio pessoal construído com tecnologias web modernas. Inclui seção hero responsiva, vitrine de projetos, habilidades organizadas por categorias, seção de contato e suporte completo a i18n para inglês, português e espanhol. Implementa navegação por hash, alternância de tema claro/escuro e performance otimizada com Vite.',
      },
      es: {
        title: 'Portafolio Personal',
        shortDescription: 'Un portafolio moderno y responsivo, con soporte multilingüe y modo oscuro, para mostrar habilidades full stack.',
        longDescription: 'Un portafolio personal construido con tecnologías web modernas. Incluye sección hero responsiva, vitrina de proyectos, habilidades organizadas por categorías, sección de contacto y soporte completo de i18n para inglés, portugués y español. Implementa navegación por hash, cambio de tema claro/oscuro y rendimiento optimizado con Vite.',
      },
    },
    stack: ['React', 'TypeScript', 'Vite', 'Mantine UI', 'TanStack Router', 'i18next'],
    coverImage: '',
    repoUrl: 'https://github.com/joao-felipe-alves-marinho/my-portfolio',
    liveUrl: 'https://joaofmarinho.vercel.app/',
    featured: true,
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 3)
}

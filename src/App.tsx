import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './i18n/index.ts';

const router = createRouter({
  routeTree,
  defaultHashScrollIntoView: { behavior: "smooth" }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {

  return (
    <MantineProvider 
      withStaticClasses={false} 
      theme={{ 
        primaryColor: 'violet',
        fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif'
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
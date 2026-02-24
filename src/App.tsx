import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './i18next/i18n.ts';

const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {

  return (
    <MantineProvider withStaticClasses={false} theme={{ primaryColor: 'violet' }}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
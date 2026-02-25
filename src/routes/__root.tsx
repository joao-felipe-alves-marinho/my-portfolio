import { Outlet, createRootRoute } from '@tanstack/react-router'
import { AppShell } from '@mantine/core'
import { SiteHeader } from '@/components/layout/header'
import { SiteNavbar } from '@/components/layout/navbar'
import { SiteFooter } from '@/components/layout/footer'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [opened, { toggle }] = useDisclosure()
  const isMobile = useMediaQuery('(max-width: 576px)')

  useEffect(() => {
    if (opened && isMobile) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [opened, isMobile])

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding={0}
    >
      <AppShell.Header>
        <SiteHeader opened={opened} onToggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={16}>
        <SiteNavbar onNavClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
        <SiteFooter />
      </AppShell.Main>
    </AppShell>
  )
}

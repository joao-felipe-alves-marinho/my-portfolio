import { Outlet, createRootRoute } from '@tanstack/react-router'
import { AppShell } from '@mantine/core'
import { SiteHeader } from '@/components/layout/header'
import { SiteNavbar } from '@/components/layout/navbar'
import { SiteFooter } from '@/components/layout/footer'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './root.module.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { t } = useTranslation('common')
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
      <a href="#maincontent" className={classes.skipLink}>
        {t('accessibility.skipToMain')}
      </a>

      <AppShell.Header>
        <SiteHeader opened={opened} onToggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={16} component="nav" aria-label={t('accessibility.mobileNavigation')}>
        <SiteNavbar onNavClick={toggle} />
      </AppShell.Navbar>

      <AppShell.Main id="maincontent" tabIndex={-1}>
        <Outlet />
        <SiteFooter />
      </AppShell.Main>
    </AppShell>
  )
}

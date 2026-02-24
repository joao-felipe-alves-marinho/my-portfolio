import { Outlet, createRootRoute } from '@tanstack/react-router'
import { AppShell, Box, Burger, Container, Group, Title, Stack, Divider } from '@mantine/core'
import Link from '@/components/ui/link/Link'
import NavLink from '@/components/ui/nav-link/NavLink'
import ColorSchemeToggleButton from '@/components/ui/color-scheme-toggle-button/ColorSchemeToggleButton'
import { LanguagePicker } from '@/components/ui/languague-picker/LanguagePicker'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import LinkedinButton from '@/components/ui/linkedin-button/LinkedinButton'
import GithubButton from '@/components/ui/github-button/GithubButton'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 576px)');

  useEffect(() => {
    if (opened && isMobile) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [opened, isMobile]);

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding={0}
    >
      <AppShell.Header
      >
        <Container h="100%">
          <Group h="100%" justify="space-between" align="center" hiddenFrom="sm">
            <Title order={1} fw={700} fs="italic">João Felipe</Title>
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Group>

          <Box h="100%" visibleFrom='sm' style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
            <Group justify="flex-start" wrap="nowrap">
              <Title order={1} fw={700} fs="italic">João Felipe</Title>
            </Group>

            <Group component='nav' justify="center">
              <Link to="/" hash="projetos">Projects</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Contact</Link>
            </Group>

            <Group justify="flex-end" wrap="nowrap" gap={8}>
              <LanguagePicker />
              <ColorSchemeToggleButton />
              <GithubButton />
              <LinkedinButton />
            </Group>
          </Box>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={16}>
        <AppShell.Section>
          <Stack gap={0}>
            <NavLink to="/" hash="projetos" label="Projects" active={false} onClick={() => { toggle() }} />
            <NavLink to="/" label="Contacts" active={false} onClick={() => { toggle() }} />
            <NavLink to="/" label="Support" active={false} onClick={() => { toggle() }} />
          </Stack>
        </AppShell.Section>
        <Divider my="md" />
        <AppShell.Section>
          <Group justify="center" gap="md">
            <LanguagePicker />
            <ColorSchemeToggleButton />
            <GithubButton />
            <LinkedinButton />
          </Group>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
        <Box component="footer" py="sm">
          <Container>
            F
          </Container>
        </Box>
      </AppShell.Main>
    </AppShell >
  )
}

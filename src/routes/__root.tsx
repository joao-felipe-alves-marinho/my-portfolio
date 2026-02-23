import { Outlet, createRootRoute } from '@tanstack/react-router'
import { AppShell, Container } from '@mantine/core'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <AppShell
      header={{ height: 30 }}
      footer={{ height: 30 }}
    >
      <AppShell.Header
      >
        <Container>
          H
        </Container>
      </AppShell.Header>
      <AppShell.Main
      >
        <Container>
          <Outlet />
        </Container>
      </AppShell.Main>
      <AppShell.Footer
      >
        <Container>
          F
        </Container>
      </AppShell.Footer>
    </AppShell>
  )
}

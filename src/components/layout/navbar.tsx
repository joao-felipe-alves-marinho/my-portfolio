import { AppShell, Stack, Divider, Group } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import NavLink from '@/components/ui/nav-link/NavLink'
import ColorSchemeToggleButton from '@/components/ui/color-scheme-toggle-button/ColorSchemeToggleButton'
import { LanguagePicker } from '@/components/ui/languague-picker/LanguagePicker'
import LinkedinButton from '@/components/ui/linkedin-button/LinkedinButton'
import GithubButton from '@/components/ui/github-button/GithubButton'

interface SiteNavbarProps {
  onNavClick: () => void
}

export function SiteNavbar({ onNavClick }: SiteNavbarProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <AppShell.Section>
        <Stack gap={0}>
          <NavLink to="/" hash="about-me" label={t('navbar.aboutMe')} active={false} onClick={onNavClick} />
          <NavLink to="/" hash="projects" label={t('navbar.projects')} active={false} onClick={onNavClick} />
          <NavLink to="/" hash="contact" label={t('navbar.contact')} active={false} onClick={onNavClick} />
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
    </>
  )
}

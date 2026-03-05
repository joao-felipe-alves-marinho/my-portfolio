import { Container, Group, Title, Box, Burger } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import Link from '@/components/ui/link/Link'
import ColorSchemeToggleButton from '@/components/ui/color-scheme-toggle-button/ColorSchemeToggleButton'
import { LanguagePicker } from '@/components/ui/languague-picker/LanguagePicker'
import LinkedinButton from '@/components/ui/linkedin-button/LinkedinButton'
import GithubButton from '@/components/ui/github-button/GithubButton'

interface SiteHeaderProps {
  opened: boolean
  onToggle: () => void
}

export function SiteHeader({ opened, onToggle }: SiteHeaderProps) {
  const { t } = useTranslation('common')
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container h="100%">
      <Group h="100%" justify="space-between" align="center" hiddenFrom="sm">
        <Link to="/" underline="never" onClick={handleHomeClick}>
          <Title order={1} fw={700} fs="italic" c="var(--mantine-primary-color-filled)">
            {t('header.home')}
          </Title>
        </Link>
        <Burger opened={opened} onClick={onToggle} size="sm" aria-label={t('accessibility.toggleMenu')} />
      </Group>

      <Box
        h="100%"
        visibleFrom="sm"
        style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}
      >
        <Group justify="flex-start" wrap="nowrap">
          <Link to="/" underline="never" onClick={handleHomeClick}>
            <Title order={1} fw={700} fs="italic" c="var(--mantine-primary-color-filled)">
              {t('header.home')}
            </Title>
          </Link>
        </Group>

        <Group component="nav" justify="center" aria-label={t('accessibility.primaryNavigation')}>
          <Link to="/" hash="about-me">
            {t('header.aboutMe')}
          </Link>
          <Link to="/" hash="projects">
            {t('header.projects')}
          </Link>
          <Link to="/" hash="contact">
            {t('header.contact')}
          </Link>
        </Group>

        <Group justify="flex-end" wrap="nowrap" gap={8}>
          <LanguagePicker />
          <ColorSchemeToggleButton />
          <GithubButton />
          <LinkedinButton />
        </Group>
      </Box>
    </Container>
  )
}

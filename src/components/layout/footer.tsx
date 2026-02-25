import { Box, Container, Group, ActionIcon, Text, Stack } from '@mantine/core'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

const GITHUB_URL = 'https://github.com/joao-felipe-alves-marinho'
const LINKEDIN_URL = 'https://linkedin.com/in/joao-felipe-alves-marinho'

export function SiteFooter() {
  const { t } = useTranslation('common')
  const currentYear = new Date().getFullYear()

  const iconGroup = (
    <Group gap="sm">
      <ActionIcon
        component="a"
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        variant="subtle"
        size="md"
        aria-label={t('footer.ariaGithub')}
      >
        <FaGithub size={16} />
      </ActionIcon>
      <ActionIcon
        component="a"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        variant="subtle"
        size="md"
        aria-label={t('footer.ariaLinkedin')}
      >
        <FaLinkedin size={16} />
      </ActionIcon>
    </Group>
  )

  return (
    <Box
      component="footer"
      py="md"
      style={{
        borderTop: '1px solid var(--mantine-color-gray-2)',
      }}
    >
      <Container>
        <Stack gap="md" hiddenFrom="sm">
          <Text size="sm" c="dimmed" ta="center">
            {t('footer.rightsShort', { year: currentYear })}
          </Text>
          <Group gap="sm" justify="center">
            {iconGroup}
          </Group>
        </Stack>

        <Group justify="space-between" align="center" visibleFrom="sm">
          <Text size="sm" c="dimmed">
            {t('footer.rights', { year: currentYear })}
          </Text>
          {iconGroup}
        </Group>
      </Container>
    </Box>
  )
}

import { Box, Button, Container, Divider, Group, Stack, Text, Title } from '@mantine/core'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

const EMAIL = 'joao.felipe.alves.marinho@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/joao-felipe-alves-marinho'
const GITHUB_URL = 'https://github.com/joao-felipe-alves-marinho'

export function ContactSection() {
  const { t } = useTranslation('common')

  return (
    <Box component="section" py="4rem" id="contact">
      <Container>
        <Stack gap="xl" maw={816} mx="auto">
          <Group gap="xs" wrap="nowrap" align="center">
            <Title order={2}>{t('contact.title')}</Title>
            <Divider color="var(--mantine-primary-color-filled)" style={{ flex: 1, alignSelf: 'center' }} />
          </Group>

          <Text size="lg" ta="center">
            {t('contact.description')}
          </Text>

          <Stack gap="md" align="center">
            <Button
              component="a"
              href={`mailto:${EMAIL}`}
              size="lg"
              leftSection={<FaEnvelope size={20} />}
            >
              {t('contact.emailButton')}
            </Button>

            <Group gap="md" justify="center">
              <Button
                component="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="md"
                leftSection={<FaLinkedin size={16} />}
              >
                {t('contact.linkedin')}
              </Button>
              <Button
                component="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="md"
                leftSection={<FaGithub size={16} />}
              >
                {t('contact.github')}
              </Button>
            </Group>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

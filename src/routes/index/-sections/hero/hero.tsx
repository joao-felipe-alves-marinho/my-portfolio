import { Box, Button, Container, Divider, Group, Stack, Text, Title, useComputedColorScheme } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import ButtonLink from '@/components/ui/button-link/ButtonLink'
import classes from './hero.module.css'

export function HeroSection() {
  const { t } = useTranslation('common')
  const computedColorScheme = useComputedColorScheme('light')
  const heroBg = computedColorScheme === 'dark' ? 'var(--mantine-color-body)' : 'var(--mantine-color-gray-2)'
  const outlineButtonColor = computedColorScheme === 'light' ? 'violet.9' : undefined

  return (
    <Box
      component="section"
      py={{ base: '4rem', sm: '8rem' }}
      id="hero"
      style={{ background: `linear-gradient(to bottom, ${heroBg} 0%, ${heroBg} 95%, transparent 100%)` }}
    >
      <Container>
        <Stack gap="xl" align="center" maw={816} mx="auto">
          <Stack gap="xs">
            <Title order={1} ta="center" className={classes.title}>{t('hero.title')}</Title>
            <Divider color="var(--mantine-primary-color-filled)" style={{ width: '90%', alignSelf: 'center' }} />
          </Stack>
          <Text ta="center" lh={2} className={classes.description}>
            {t('hero.description')}
          </Text>
          <Group gap="md" mt="md" justify="center" wrap="wrap">
            <Button
              size="lg"
              className={classes.ctaButton}
              component={ButtonLink}
              to="/"
              hash="projects"
            >
              {t('hero.ctaProjects')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={classes.ctaButton}
              component={ButtonLink}
              to="/"
              hash="contact"
              color={outlineButtonColor}
            >
              {t('hero.ctaContact')}
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
}

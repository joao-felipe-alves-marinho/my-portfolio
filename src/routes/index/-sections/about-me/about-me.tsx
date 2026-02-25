import { Box, Container, Divider, Group, Stack, Text, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export function AboutMeSection() {
  const { t } = useTranslation('common')

  return (
    <Box component="section" py="4rem" id="about-me">
      <Container>
        <Stack gap="xl" maw={816} mx="auto">
          <Group gap="xs" wrap="nowrap" align="center">
            <Title order={2}>{t('about.title')}</Title>
            <Divider color="var(--mantine-primary-color-filled)" style={{ flex: 1, alignSelf: 'center' }} />
          </Group>
          <Text size="lg" ta="left">
            {t('about.paragraph1')}
          </Text>
          <Text size="lg" ta="left">
            {t('about.paragraph2')}
          </Text>
          <Text size="lg" ta="left">
            {t('about.paragraph3')}
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

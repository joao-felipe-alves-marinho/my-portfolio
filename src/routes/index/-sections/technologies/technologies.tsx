import { Box, Card, Container, Divider, Group, List, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'

interface TechCategoryProps {
  title: string
  items: string[]
}

function TechCategory({ title, items }: TechCategoryProps) {
  return (
    <Card withBorder radius="md" p="lg">
      <Stack gap="sm">
        <Title order={3}>{title}</Title>
        <List spacing="xs" size="sm" withPadding>
          {items.map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
      </Stack>
    </Card>
  )
}

export function TechnologiesSection() {
  const { t } = useTranslation('common')
  const categories: TechCategoryProps[] = [
    {
      title: t('technologies.frontend'),
      items: [
        'TypeScript',
        'React',
        'Vite',
        'Vue',
        t('technologies.itemArchitecture'),
        t('technologies.itemUiLibraries'),
        t('technologies.itemI18n'),
      ],
    },
    {
      title: t('technologies.backend'),
      items: [
        'Python',
        'Flask',
        'Django / Django Ninja',
        t('technologies.itemRestApi'),
        'JWT',
        'Swagger / OpenAPI',
        'ORMs',
      ],
    },
    {
      title: t('technologies.data'),
      items: [
        'PostgreSQL',
        'MySQL',
        t('technologies.itemDataModeling'),
      ],
    },
    {
      title: t('technologies.quality'),
      items: [
        t('technologies.itemAutomatedTests'),
        'TDD / BDD',
        t('technologies.itemCodeOrganization'),
        t('technologies.itemAutoDocs'),
      ],
    },
    {
      title: t('technologies.devops'),
      items: [
        'Docker',
        'Git / GitHub',
        'Scrum',
      ],
    },
  ]

  return (
    <Box component="section" py="4rem" id="technologies">
      <Container>
        <Stack gap="xl" maw={816} mx="auto">
          <Group gap="xs" wrap="nowrap" align="center">
            <Title order={2}>{t('technologies.title')}</Title>
            <Divider color="var(--mantine-primary-color-filled)" style={{ flex: 1, alignSelf: 'center' }} />
          </Group>

          <Text size="lg" ta="left">
            {t('technologies.description')}
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {categories.map((category) => (
              <TechCategory key={category.title} title={category.title} items={category.items} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}

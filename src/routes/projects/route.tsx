import { Container, Stack, Title, Group, Divider, SimpleGrid, Card, Image, Text, Badge } from '@mantine/core'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { projects } from '@/data/projects'
import classes from './projects.module.css'

export const Route = createFileRoute('/projects')({
  component: ProjectsListComponent,
})

function ProjectsListComponent() {
  const { t } = useTranslation('common')

  return (
    <Container py="4rem">
      <Stack gap="xl">
        <Group gap="xs" wrap="nowrap" align="center">
          <Title order={1}>{t('projects.allProjectsTitle')}</Title>
          <Divider color="var(--mantine-primary-color-filled)" style={{ flex: 1, alignSelf: 'center' }} />
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {projects.map((project) => (
            <Card
              key={project.slug}
              component={Link}
              to={`/projects/${project.slug}`}
              className={classes.projectCard}
              radius="md"
              withBorder
            >
              <Card.Section mb="md">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  height={250}
                  className={classes.cardImage}
                />
              </Card.Section>

              <Stack gap="sm" h="100%">
                <Stack gap="xs">
                  <Title order={3} size="h5">{project.title}</Title>
                  <Text size="sm" c="dimmed" lineClamp={2}>
                    {project.shortDescription}
                  </Text>
                </Stack>

                <Group gap="xs" wrap="wrap" mt="auto">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="light" size="xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.stack.length > 3 && (
                    <Badge variant="light" size="xs">
                      +{project.stack.length - 3}
                    </Badge>
                  )}
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

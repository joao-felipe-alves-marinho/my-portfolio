import { Container, Stack, Title, Group, Divider, Image, Text, Badge, Button, Box } from '@mantine/core'
import { createFileRoute, Link, useParams } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { getProjectBySlug } from '@/data/projects'
import classes from './project-detail.module.css'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectDetailComponent,
})

function ProjectDetailComponent() {
  const { t } = useTranslation('common')
  const { slug } = useParams({ from: '/projects/$slug' })
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <Container py="4rem">
        <Stack gap="lg" align="center" justify="center" mih={400}>
          <Title order={1}>{t('projects.notFound')}</Title>
          <Text c="dimmed">{t('projects.notFoundDescription')}</Text>
          <Button component={Link} to="/projects">
            {t('projects.backToList')}
          </Button>
        </Stack>
      </Container>
    )
  }

  return (
    <Container py="4rem">
      <Stack gap="xl">
        <Button component={Link} to="/projects" variant="subtle" size="sm">
          {t('projects.back')}
        </Button>

        <Stack gap="md">
          <Group gap="xs" wrap="nowrap" align="center">
            <Title order={1}>{project.title}</Title>
          </Group>
          <Divider color="var(--mantine-primary-color-filled)" />
        </Stack>

        <Box className={classes.heroImage}>
          <Image src={project.coverImage} alt={project.title} radius="md" />
        </Box>

        <Text size="lg" c="dimmed" className={classes.shortDescription}>
          {project.shortDescription}
        </Text>

        <Box className={classes.descriptionBox}>
          <Stack gap="md">
            <div>
              <Title order={3} mb="sm">{t('projects.overview')}</Title>
              <Text size="md" lh={1.8}>
                {project.longDescription}
              </Text>
            </div>

            <div>
              <Title order={3} mb="sm">{t('projects.technologies')}</Title>
              <Group gap="md" wrap="wrap">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="filled" size="lg">
                    {tech}
                  </Badge>
                ))}
              </Group>
            </div>

            <div>
              <Title order={3} mb="sm">{t('projects.links')}</Title>
              <Group gap="md">
                {project.liveUrl && (
                  <Button
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                  >
                    {t('projects.viewLive')}
                  </Button>
                )}
                {project.repoUrl && (
                  <Button
                    component="a"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                  >
                    {t('projects.viewCodeOnGithub')}
                  </Button>
                )}
              </Group>
            </div>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

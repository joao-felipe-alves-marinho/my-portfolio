import { Badge, Box, Button, Card, Container, Divider, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { getFeaturedProjects, getProjectContent } from '@/data/projects'
import classes from './projects.module.css'

export function ProjectsSection() {
  const { t, i18n } = useTranslation('common')
  const featured = getFeaturedProjects()

  return (
    <Box component="section" py="4rem" id="projects">
      <Container>
        <Stack gap="xl" maw={816} mx="auto">
          <Group gap="xs" wrap="nowrap" align="center">
            <Title order={2}>{t('projects.title')}</Title>
            <Divider color="var(--mantine-primary-color-filled)" style={{ flex: 1, alignSelf: 'center' }} />
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {featured.map((project) => (
              <Card key={project.slug} className={classes.projectCard} radius="md" withBorder>
                {(() => {
                  const content = getProjectContent(project, i18n.language)

                  return (
                <Stack gap="md" h="100%">
                  <Stack gap="xs">
                    <Title order={3}>{content.title}</Title>
                    <Text size="sm" className={classes.shortDescription}>
                      {content.shortDescription}
                    </Text>
                  </Stack>

                  <Group gap="xs" wrap="wrap">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="light" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </Group>

                  <Group gap="md" mt="auto">
                    {project.liveUrl && (
                      <Button
                        component="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="filled"
                        size="sm"
                      >
                        {t('projects.viewProject')}
                      </Button>
                    )}

                    {project.repoUrl && (
                      <Button
                        component="a"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                      >
                        {t('projects.code')}
                      </Button>
                    )}
                  </Group>
                </Stack>
                  )
                })()}
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}

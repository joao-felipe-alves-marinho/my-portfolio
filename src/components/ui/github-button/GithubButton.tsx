import { ActionIcon } from '@mantine/core'
import { FaGithub } from 'react-icons/fa6'

function GithubButton() {
  return (
    <ActionIcon
      component="a"
      href="https://github.com/joao-felipe-alves-marinho"
      target="_blank"
      rel="noopener noreferrer"
      variant="default"
      size="lg"
      radius="md"
      aria-label="GitHub"
    >
      <FaGithub size={20} />
    </ActionIcon>
  )
}

export default GithubButton
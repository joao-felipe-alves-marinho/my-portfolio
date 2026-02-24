import { ActionIcon } from '@mantine/core';
import { FaLinkedin } from 'react-icons/fa6';

function LinkedinButton() {
  return (
    <ActionIcon
      component="a"
      href="https://linkedin.com/in/joao-felipe-alves-marinho"
      target="_blank"
      rel="noopener noreferrer"
      variant="default"
      size="lg"
      radius="md"
      aria-label="LinkedIn"
    >
      <FaLinkedin size={16} />
    </ActionIcon>
  );
}

export default LinkedinButton;
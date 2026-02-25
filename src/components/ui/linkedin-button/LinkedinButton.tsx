import { ActionIcon } from '@mantine/core';
import { FaLinkedin } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

function LinkedinButton() {
  const { t } = useTranslation('common');

  return (
    <ActionIcon
      component="a"
      href="https://linkedin.com/in/joao-felipe-alves-marinho"
      target="_blank"
      rel="noopener noreferrer"
      variant="default"
      size="lg"
      radius="md"
      aria-label={t('footer.ariaLinkedin')}
    >
      <FaLinkedin size={16} />
    </ActionIcon>
  );
}

export default LinkedinButton;
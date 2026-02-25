import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { Group, Image, Menu, UnstyledButton } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import classes from './LanguagePicker.module.css';
import brasilFlagUrl from '@/assets/flags/brasil-flag.png';
import USAFlagUrl from '@/assets/flags/usa-flag.png';
import MexicoFlagUrl from '@/assets/flags/mexico-flag.png';

const data = [
  { image: USAFlagUrl, lang: 'en', labelKey: 'language.english' },
  { image: brasilFlagUrl, lang: 'pt', labelKey: 'language.portuguese' },
  { image: MexicoFlagUrl, lang: 'es', labelKey: 'language.spanish' },
];

function getDefaultItem(language: string) {
  return data.find((d) => language.startsWith(d.lang)) ?? data[0];
}

export function LanguagePicker() {
  const { i18n, t } = useTranslation('common');
  const [opened, setOpened] = useState(false);
  const selected = getDefaultItem(i18n.language);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={16} height={16} alt="" />}
      onClick={() => { void i18n.changeLanguage(item.lang); }}
      key={item.lang}
    >
      {t(item.labelKey)}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => { setOpened(true); }}
      onClose={() => { setOpened(false); }}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <Image src={selected.image} w={16} h={16} alt={t(selected.labelKey)} />
            <span className={classes.label}>{t(selected.labelKey)}</span>
          </Group>
          <FaChevronDown size={12} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
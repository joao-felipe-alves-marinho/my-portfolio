import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { LuMoon, LuSun } from 'react-icons/lu';
import classes from './ColorSchemaToggleButton.module.css';

function ColorSchemeToggleButton() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => { setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light'); }}
        variant="default"
        size="xl"
        radius="md"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === 'light' ? <LuSun className={classes.icon} /> : <LuMoon className={classes.icon} />}
      </ActionIcon>
    </Group>
  );
}

export default ColorSchemeToggleButton;
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { FaMoon, FaSun } from 'react-icons/fa6';

function ColorSchemeToggleButton() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => { setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light'); }}
      variant="default"
      size="lg"
      radius="md"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
    </ActionIcon>
  );
}

export default ColorSchemeToggleButton;
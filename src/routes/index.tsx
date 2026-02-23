import { Button } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import ColorSchemeToggleButton from '@/components/ui/color-scheme-toggle-button/ColorSchemeToggleButton'
import { LanguagePicker } from '@/components/ui/languague-picker/LanguagePicker'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('welcome')}</h1>
      <Button>
        Button
      </Button>
      <ColorSchemeToggleButton />
      <LanguagePicker />
    </>
  )
}

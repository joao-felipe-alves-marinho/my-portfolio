import { createLink, type LinkComponent } from '@tanstack/react-router'
import { Anchor, type AnchorProps } from '@mantine/core'

type MantineAnchorProps = Omit<AnchorProps, 'href'>

const MantineLinkComponent = ({ ref, ...props }: MantineAnchorProps & { ref?: React.RefObject<HTMLAnchorElement | null> }) => {
  return <Anchor ref={ref} underline="never" c="inherit" {...props} />
}

const CreatedLinkComponent = createLink(MantineLinkComponent)

const Link: LinkComponent<typeof MantineLinkComponent> = (
  props,
) => {
  return <CreatedLinkComponent {...props} />
}

export default Link
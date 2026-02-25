import { createLink } from '@tanstack/react-router'
import { Anchor, type AnchorProps } from '@mantine/core'
import { useCallback, type ComponentProps, type MouseEvent, type Ref } from 'react'
import { handleHashLinkClick } from '@/utils/hash-link-click-handler'

type MantineAnchorProps = Omit<AnchorProps, 'href'>

const MantineLinkComponent = ({ ref, onClick, ...props }: MantineAnchorProps & { ref?: Ref<HTMLAnchorElement>, onClick?: (e: MouseEvent<HTMLAnchorElement>) => void }) => {
  return <Anchor ref={ref} underline="hover" c="inherit" onClick={onClick} {...props} />
}

const CreatedLinkComponent = createLink(MantineLinkComponent)

type CreatedLinkProps = ComponentProps<typeof CreatedLinkComponent>

const Link = (props: CreatedLinkProps) => {
  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    handleHashLinkClick(e, props.onClick)
  }, [props])

  return <CreatedLinkComponent {...props} onClick={handleClick} />
}

export default Link
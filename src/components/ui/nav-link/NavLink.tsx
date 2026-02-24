import { createLink, type LinkComponent } from '@tanstack/react-router'
import { NavLink as MantineNavLink, type NavLinkProps as MantineNavLinkProps } from '@mantine/core'

type MantineRouterNavLinkProps = Omit<MantineNavLinkProps, 'href'>

const MantineNavLinkComponent = ({ ref, ...props }: MantineRouterNavLinkProps & { ref?: React.RefObject<HTMLAnchorElement | null> }) => {
	return <MantineNavLink ref={ref} variant="subtle" c="inherit" py="md" fz="lg" {...props} />
}

const CreatedNavLinkComponent = createLink(MantineNavLinkComponent)

const NavLink: LinkComponent<typeof MantineNavLinkComponent> = (
	props,
) => {
	return <CreatedNavLinkComponent {...props} />
}

export default NavLink

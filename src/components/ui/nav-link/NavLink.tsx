import { createLink } from '@tanstack/react-router'
import { NavLink as MantineNavLink, type NavLinkProps as MantineNavLinkProps } from '@mantine/core'
import { useCallback, type ComponentProps, type MouseEvent, type Ref } from 'react'
import { handleHashLinkClick } from '@/utils/hash-link-click-handler'

type MantineRouterNavLinkProps = Omit<MantineNavLinkProps, 'href'>

const MantineNavLinkComponent = ({ ref, onClick, ...props }: MantineRouterNavLinkProps & { ref?: Ref<HTMLAnchorElement>, onClick?: (e: MouseEvent<HTMLAnchorElement>) => void }) => {
	return <MantineNavLink ref={ref} variant="subtle" c="inherit" py="md" fz="lg" onClick={onClick} {...props} />
}

const CreatedNavLinkComponent = createLink(MantineNavLinkComponent)

type CreatedNavLinkProps = ComponentProps<typeof CreatedNavLinkComponent>

const NavLink = (
	props: CreatedNavLinkProps,
) => {
	const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
		handleHashLinkClick(e, props.onClick)
	}, [props.onClick])

	return <CreatedNavLinkComponent {...props} onClick={handleClick} />
}

export default NavLink

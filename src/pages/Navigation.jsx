import ItemNavigation from 'components/ItemNavigation'
import {
	IoColorFilterSharp,
	IoHomeOutline,
	IoPersonOutline,
	IoMailOutline,
	IoHelpCircleOutline,
	IoSettingsOutline,
	IoFingerPrintOutline,
	IoLogOutOutline,
} from 'react-icons/io5'

const Navigation = ({ toggle }) => {
	const navigationList = [
		{
			title: 'eX Man',
			link: '',
			icon: <IoColorFilterSharp />,
			sub: '@0.1.3',
		},
		{
			title: 'Dashboard',
			link: '/',
			icon: <IoHomeOutline />,
		},
		{
			title: 'Shared Expense',
			link: '/shared',
			icon: <IoHomeOutline />,
		},
		{
			title: 'Cash In/Out',
			link: '/money',
			icon: <IoHelpCircleOutline />,
		},
		{
			title: 'Edit Profile',
			link: '/profile',
			icon: <IoPersonOutline />,
		},
		{
			title: 'Logout',
			link: '/logout',
			icon: <IoLogOutOutline />,
		},
	]
	return (
		<div className={toggle ? 'navigation active' : 'navigation'}>
			<ul>
				{navigationList.map(nav =>
					nav.sub ? (
						<ItemNavigation link={nav.link} icon={nav.icon} title={nav.title} sub={nav.sub} />
					) : (
						<ItemNavigation link={nav.link} icon={nav.icon} title={nav.title} />
					)
				)}
			</ul>
		</div>
	)
}

export default Navigation

import ItemNavigation from 'components/ItemNavigation'
import { BiWallet, BiUserCircle, BiVector, BiMoney, BiIdCard, BiLogOut } from 'react-icons/bi'

const Navigation = ({ toggle }) => {
	const navigationList = [
		{
			title: 'EX-MAN',
			link: '',
			icon: <BiWallet />,
			sub: '@0.1.3',
		},
		{
			title: 'Dashboard',
			link: '/',
			icon: <BiUserCircle />,
		},
		{
			title: 'Shared Expense',
			link: '/shared',
			icon: <BiVector />,
		},
		{
			title: 'Cash In/Out',
			link: '/money',
			icon: <BiMoney />,
		},
		{
			title: 'Edit Profile',
			link: '/profile',
			icon: <BiIdCard />,
		},
		{
			title: 'Logout',
			link: '/logout',
			icon: <BiLogOut />,
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

import { NavLink } from 'react-router-dom'

const ItemNavigation = ({ icon, title, link, sub }) => {
	if (link === '') {
		return (
			<li>
				<a href=''>
					<span className='icon'>{icon}</span>
					<span className='title'>{title}</span>
					{sub && <span className='sub'>{sub}</span>}
				</a>
			</li>
		)
	}
	return (
		<li>
			<NavLink to={link}>
				<span className='icon'>{icon}</span>
				<span className='title'>{title}</span>
			</NavLink>
		</li>
	)
}

export default ItemNavigation

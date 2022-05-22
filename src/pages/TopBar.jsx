import { FaBars, FaSearch } from 'react-icons/fa'
import avatar from 'assets/avatar.svg'

const TopBar = ({ toggler }) => {
	return (
		<div className='topbar'>
			<div className='toggle' onClick={toggler}>
				<FaBars />
			</div>
			<div className='search'>
				<label htmlFor=''>
					<input type='text' placeholder='Search here' />
					<FaSearch />
				</label>
			</div>
			<div className='user'>
				<img src={avatar} alt='user' />
			</div>
		</div>
	)
}

export default TopBar

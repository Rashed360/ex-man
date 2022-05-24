import WindowList from 'components/WindowList'
import WindowHistory from './WindowHistory'

const DetailsBox = () => {
	return (
		<div className='details'>
			<WindowHistory />
			<WindowList />
		</div>
	)
}

export default DetailsBox

import WindowList from 'components/WindowList'
import WindowDetail from './WindowDetail'

const DetailsBox = () => {
	return (
		<div className='details'>
			<WindowDetail />
			<WindowList />
		</div>
	)
}

export default DetailsBox

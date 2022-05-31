import ContainerWindow from './ContainerWindow'
import ItemDetail from './ItemDetail'

const WindowDetail = () => {
	return (
		<ContainerWindow title='Recent Expense History' more='Show All'>
			<div className='detail-content'>
				<ItemDetail />
			</div>
		</ContainerWindow>
	)
}

export default WindowDetail

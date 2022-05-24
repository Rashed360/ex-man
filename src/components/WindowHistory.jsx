import ContainerWindow from './ContainerWindow'
import ItemHistory from './ItemHistory'

const WindowHistory = () => {
	return (
		<ContainerWindow title='Expense History'>
			<div className='history-content'>
				<ItemHistory />
				<ItemHistory />
				<ItemHistory />
				<ItemHistory />
				<ItemHistory />
			</div>
		</ContainerWindow>
	)
}

export default WindowHistory

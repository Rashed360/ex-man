const ItemCard = ({ title, number, icon }) => {
	return (
		<div className='card'>
			<div>
				<div className='number'>{number}</div>
				<div className='title'>{title}</div>
			</div>
			<div className='icon'>{icon}</div>
		</div>
	)
}

export default ItemCard

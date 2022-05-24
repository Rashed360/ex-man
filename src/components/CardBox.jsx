import { BiArchive, BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import ItemCard from 'components/ItemCard'

const CardBox = () => {
	return (
		<div className='cardBox'>
			<ItemCard title='Net Balance' number='8,950' icon={<BiArchive />} />
			<ItemCard title='Total In (+)' number='10,000' icon={<BiArchiveIn />} />
			<ItemCard title='Total Out (-)' number='1,050' icon={<BiArchiveOut />} />
		</div>
	)
}

export default CardBox

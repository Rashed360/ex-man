import { FaShoppingCart, FaCartPlus, FaCartArrowDown, FaLuggageCart } from 'react-icons/fa'
import ItemCard from 'components/ItemCard'

const CardBox = () => {
	return (
		<div className='cardBox'>
			<ItemCard title='Sales' number='1,450' icon={<FaShoppingCart />} />
			<ItemCard title='Pending' number='950' icon={<FaCartPlus />} />
			<ItemCard title='Earning' number='1,040' icon={<FaCartArrowDown />} />
			<ItemCard title='Revenue' number='2,550' icon={<FaLuggageCart />} />
		</div>
	)
}

export default CardBox

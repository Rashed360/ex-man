import { useState } from 'react'
import Navigation from './Navigation'
import ContainerMain from 'components/ContainerMain'
import TopBar from './TopBar'
import CardBox from './CardBox'
import DetailsBox from './DetailsBox'
import Home from './Home'

const App = () => {
	const [navToggle, setNavToggle] = useState(false)
	const toggleNavAction = () => {
		setNavToggle(!navToggle)
	}

	return (
		<>
			<Home />
			{/* <Navigation toggle={navToggle} />
			<ContainerMain toggle={navToggle}>
				<TopBar toggler={toggleNavAction} />
				<CardBox />
				<DetailsBox />
			</ContainerMain> */}
		</>
	)
}

export default App

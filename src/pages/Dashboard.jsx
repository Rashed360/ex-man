import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import ContainerMain from 'components/ContainerMain'
import TopBar from './TopBar'

const Dashboard = () => {
	const [navToggle, setNavToggle] = useState(false)
	const toggleNavAction = () => {
		setNavToggle(!navToggle)
	}

	return (
		<>
			<Navigation toggle={navToggle} />
			<ContainerMain toggle={navToggle}>
				<TopBar toggler={toggleNavAction} />
				<Outlet />
			</ContainerMain>
		</>
	)
}

export default Dashboard

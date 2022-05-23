import { Routes, Route } from 'react-router-dom'
import NoMatch from './NoMatch'
import Home from './Home'
import Dashboard from './Dashboard'
import Overview from './Overview'
import CashInOut from './CashInOut'
import Profile from './Profile'
import Logout from './Logout'
import SharedExpense from './SharedExpense'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />}>
				<Route index element={<Overview />} />
				<Route path='money' element={<CashInOut />} />
				<Route path='profile' element={<Profile />} />
				<Route path='shared' element={<SharedExpense />} />
				<Route path='logout' element={<Logout />} />
			</Route>
			<Route path='/home' element={<Home />} />
			<Route path='*' element={<NoMatch />} />
		</Routes>
	)
}

export default App

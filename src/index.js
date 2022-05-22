import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import 'styles/globals.css'
import 'styles/index.css'
import App from 'pages/_App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)

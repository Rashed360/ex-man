import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import 'styles/globals.css'
import 'styles/index.css'
import Router from 'pages/Router'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Router />
		</Provider>
	</BrowserRouter>
)

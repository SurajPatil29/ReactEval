import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import { AuthContext } from "./Componants/AuthContext"

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthContext>
		<ChakraProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</AuthContext>
	
	
	)
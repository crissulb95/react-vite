import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from './adapters/react-router-dom'
import App from './modules/app/layout'

const root = createRoot(document.getElementById('root'))

root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)

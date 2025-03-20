import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MortgageWindow from './components/MortgageWindow/MortgageWindow'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<MortgageWindow />
	</StrictMode>
)

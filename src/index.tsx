import React from 'react'
import { RecoilRoot } from 'recoil'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from 'app'
import 'index.css'
import AppLayout from 'components/globals/layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<AppLayout>
					<App />
				</AppLayout>
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>
)

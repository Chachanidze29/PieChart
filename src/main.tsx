import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PieChartProvider from './component/context/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PieChartProvider>
      <App />
    </PieChartProvider>
  </React.StrictMode>,
)

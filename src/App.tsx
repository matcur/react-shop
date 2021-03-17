import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Header } from './components/header/Header'
import { routes } from './main-routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          {routes}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

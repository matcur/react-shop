import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { NotifyList } from './components/common/notify/NotifyList'
import { Header } from './components/header/Header'
import { routes } from './main-routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Switch>
          {routes}
        </Switch>
        <NotifyList/>
      </div>
    </BrowserRouter>
  )
}

export default App

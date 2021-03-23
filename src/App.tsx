import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { NotifyList } from './components/common/notify/NotifyList'
import { Header } from './components/header/Header'
import { routes } from './main-routes'
import { RootReducer } from './redux/store'

const App: React.FC = () => {
  const info = useSelector<RootReducer>(state => state.event)

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

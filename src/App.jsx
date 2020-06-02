import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Products from './pages/Products'
import logo from './logo.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route component={() => <Redirect to={'/'} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

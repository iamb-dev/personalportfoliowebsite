import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </BrowserRouter>
)

export default App

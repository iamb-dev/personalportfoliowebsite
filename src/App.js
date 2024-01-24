import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </BrowserRouter>
)

export default App

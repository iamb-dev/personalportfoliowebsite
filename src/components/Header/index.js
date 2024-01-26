import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-content">
      <h1 className="website-heading">Madelyn Torff</h1>
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>About</li>
        </Link>
        <Link to="/projects" className="nav-link">
          <li>Projects</li>
        </Link>
        <Link to="/contacts" className="nav-link">
          <li>Contacts</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header

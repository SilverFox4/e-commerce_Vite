import CardWidget from '../CartWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link activeClassName="active-link" style={{ textDecoration: 'none' , color: 'white' }} to="/">
        <h1>CatTech</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active-link" style={{ textDecoration: 'none', color: 'white' }} to="categoria/10" >Serie 10</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" style={{ textDecoration: 'none' , color: 'white' }} to="categoria/16">Serie 16</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" style={{ textDecoration: 'none' , color: 'white' }} to="categoria/30">Serie 30</NavLink>
          </li>
        </ul>
      </nav>
      <CardWidget />
    </header>
  )
}

export default NavBar
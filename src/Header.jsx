import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li> <Link to='/new'>New Task </Link></li>
          <li> <Link to='/edit/1'> Edit Task </Link> </li>
          <li> <Link to='/' >Task List</Link></li>
          <li> <Link to='/task/1'>Task Details </Link> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

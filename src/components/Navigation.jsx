import  '../components/Navigation.css'
import axios from 'axios'

function Navigation() {
  return (
    <nav>
        <div className='navigation  '>
            <img src="/images/logo.png" alt="" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      
    </nav>
  )
}

export default Navigation

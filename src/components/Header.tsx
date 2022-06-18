import logo from '../assets/rocket.svg'
import './Header.module.css'

export function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <p>to<span>do</span></p>
    </div>
  )
}
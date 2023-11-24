import { Link } from "react-router-dom"

import Logo from '../styles/images/harry-potter-logo.png'

export default function Home() {
  return (
    <section className="centred">
      <Link to="/charIndex">
        <img src={Logo} alt="title" style={{width: '20rem'}}/>
      </Link>
    </section>
  )
}
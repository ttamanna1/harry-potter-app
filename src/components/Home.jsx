import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="centred">
      <Link to="/charIndex">
        <img src="src/styles/images/harry-potter-logo.png" alt="title" style={{width: '20rem'}}/>
      </Link>
    </section>
  )
}
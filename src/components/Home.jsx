import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="centred">
      <img src="src/styles/images/harry-potter-logo.png" alt="title" style={{width: '20rem'}}/>
      <Link to="/charIndex" className='btn btn-red'>View Characters</Link>
    </section>
  )
}
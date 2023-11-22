import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="centred">
      <Link to="/charIndex" className='btn btn-red'>View Characters</Link>
    </section>
  )
}
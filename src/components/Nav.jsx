import { useState } from 'react'
import { Link } from 'react-router-dom'

// Bootstrap Components
import Modal from 'react-bootstrap/Modal'

export default function Nav(){

  // ! State
  const [show, setShow] = useState(false)

  return (
    <>
      <header className='p-2 p-md-3 p-lg-4'>
        <button className='nav-toggle' onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <nav onClick={() => setShow(false)}>
            <Link to="/"><i className='bold display-2'>Home</i></Link>
            <Link to="/charIndex"><i className='bold display-2'>Characters</i></Link>
          </nav>
        </Modal.Header>
      </Modal>
    </>
  )
}

import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SpellIndex() {

  const spells = useLoaderData()

  // ! States
  const [ filter, setFilter ] = useState()
  const [ filteredSpells, setFilteredSpells ] = useState([])

      // ! Effects
    useEffect(() => {

      // Regex pattern that allows us to run a test on all the countries to see if pattern was found
      const pattern = new RegExp(filter, 'i')
      const filteredArray = spells.filter(spell => {
        return pattern.test(spell.name)
      })
      setFilteredSpells(filteredArray)
  
    }, [filter])

      // ! Functions
  function handleChange(e) {
    setFilter(e.target.value)
    } 

  return (
    <>
      <h1 className='text-center bold display-1 mb-4'>Spells</h1>
      <Container fluid>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <input id="search" name="search" placeholder='Search...' value={filter} onChange={handleChange} />
          </Col>
        </Row>
        <Row className='spell-list'>
          { filteredSpells.length > 0 &&
          filteredSpells.map(spell => {
            const { id, name, description } = spell
            return (
              <Col className="box"
                key={id} 
                xs={6} 
                md={4} 
                lg={3}
              >
                <div>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
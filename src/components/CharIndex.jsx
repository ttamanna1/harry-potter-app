import { useLoaderData, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CharCard() {
  const char = useLoaderData()
  const charWithImg = char.filter(char => char.image)


  // ! State
  const [ filters, setFilters ] = useState({
    house: 'All',
    search: ''
  })
  const [ houses, setHouses ] = useState([])
  const [ filteredHouses, setFilteredHouses ] = useState([])

  // ! Functions
  function handleChange(e){
    // complex data types must first be severed from the initial reference
    const newObj = { 
      ...filters,
      [e.target.name]: e.target.value
    } 
    // newObj[e.target.name] = e.target.value
    setFilters(newObj)
  }

    // ! Effects
    useEffect(() => {

      // Regex pattern that allows us to run a test on all the countries to see if pattern was found
      const pattern = new RegExp(filters.search, 'i')
      const filteredArray = charWithImg.filter(char => {
        return pattern.test(char.name) && (char.house === filters.house || filters.house === 'All')
      })
      setFilteredHouses(filteredArray)
  
      // Use the countries to create a list of regions for the dropdown (only when countries first available)
      if (charWithImg.length > 0 && houses.length === 0) {
        const housesArr = [...new Set(charWithImg.map(char => char.house))].filter(Boolean)
        setHouses(housesArr)
      }
    }, [filters])


  return (
    <>
      <h1 className='text-center bold display-1 mb-4'>Characters</h1>
      <Container fluid>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <div className="custom-select">
              <select id="dropdown" name="house" value={filters.house} onChange={handleChange}>
                <option value="All">All</option>
                {/* Render the options */}
                { houses.length > 0 &&
                  houses.map(house => {
                    return <option key={house} value={house}>{house}</option>
                  })
                }
              </select>
            </div>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <input id="search" name="search" placeholder='Search...' value={filters.search} onChange={handleChange} />
          </Col>
        </Row>
        <Row className='character-list'>
          { filteredHouses.length > 0 &&
          filteredHouses.map(char => {
            const { id, name, image } = char
            return (
              <Col 
                as={Link}
                key={id} 
                xs={6} 
                md={4} 
                lg={3}
                style={ { backgroundImage: `url(${image})` } }
                to={`/charIndex/${id}`}
              >
                {name}
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
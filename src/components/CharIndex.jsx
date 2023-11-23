import { useLoaderData, Link } from 'react-router-dom'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CharCard(){
  const char = useLoaderData()
  console.log(char)
  const charWithImg = char.filter(char => char.image)
  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Characters</h1>
      <Container fluid>
        <Row className='character-list'>
          { charWithImg.map(char => {
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
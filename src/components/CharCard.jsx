import { useLoaderData, Link } from 'react-router-dom'


export default function CharCard(){
  const char = useLoaderData()
  console.log(char)
  const { id, image, name, house, wizard, patronus, wand } = char
  console.log(id, image, name, house, wizard, patronus, wand)

  return (
    <>
      <div className="card" style="width: 18rem;">
        <img className="card-img-top" src={image} alt="Card image"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Wizard: {wizard}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">House: {house}</li>
          <li className="list-group-item">Patronus: {patronus}</li>
          <li className="list-group-item">Wand: {wand}</li>
        </ul>
      </div>
      <Link className='btn btn-blue' to="/charIndex">Back</Link>
    </>
  )
}


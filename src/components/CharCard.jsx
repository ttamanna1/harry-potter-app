import { useLoaderData, Link } from 'react-router-dom'

export default function CharCard(){
  const char = useLoaderData()
  console.log(char)
  const { image, name, house, wizard, patronus, wand } = char[0]
  console.log(image, name, house, wizard, patronus, wand)

  return (
    <>
      <div className='crest-card'>
        <img id='crest' src={`../src/styles/images/${house}.png`}/>
        <div className='card-wrapper'>
          <div className="card" id={house}>
            <img className="card-img-top" src={image} alt="Card image"/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Wizard: {wizard ? 'Yes' : 'No'}</li>
              <li className="list-group-item">House: {house ? house : 'N/A'}</li>
              <li className="list-group-item">Patronus: {patronus ? patronus : 'N/A'}</li>
              <li className="list-group-item">Wand Material: {wand.wood ? wand.wood : 'N/A' }</li>
              <li className="list-group-item">Wand Core: {wand.core ? wand.core : 'N/A' }</li>
              <li className="list-group-item">Wand Length: {wand.length ? `${wand.length} inches` : 'N/A' }</li>
            </ul>
          </div>
          <Link className='btn btn-red back' to="/charIndex">Back</Link>
        </div>
        <img id='crest' src={`../src/styles/images/${house}.png`}/>
      </div>
    </>
  )
}

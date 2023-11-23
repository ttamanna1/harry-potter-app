export async function getAllChars(){
  const res = await fetch('https://hp-api.onrender.com/api/characters')
  return res.json()
}

export async function getSingleChar(id){
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
  return res.json()
}
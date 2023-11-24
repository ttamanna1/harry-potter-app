
export async function getAllSpells() {
  const res = await fetch('https://hp-api.onrender.com/api/spells')
  return res.json()
}
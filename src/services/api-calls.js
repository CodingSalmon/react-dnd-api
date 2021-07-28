const baseUrl = "https://www.dnd5eapi.co"

export function getClassList() {
  return fetch(`${baseUrl}/api/classes`)
  .then(res => res.json())
}

export function getDetails(apiUrl) {
  return fetch(`${baseUrl}${apiUrl}`)
  .then(res => res.json())
}

export function getMonsterList() {
  return fetch(`${baseUrl}/api/monsters`)
  .then(res => res.json())
}

export function spellSearch(formData) {
  return fetch(`${baseUrl}/api/spells/?name=${formData.query}`)
  .then(res => res.json())
}

export function getSpellDetails(spellName) {
  return fetch(`${baseUrl}/api/spells/${spellName}`)
  .then(res => res.json())
}
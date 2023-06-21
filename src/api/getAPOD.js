import axios from 'axios'

const getAPOD = async (date = undefined, count = undefined) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY
  const baseUrl = import.meta.env.VITE_APP_API_ATOB_URL
  let url = `${baseUrl}?api_key=${apiKey}`
  if (date) url += `&date=${date}`
  if (count) url += `&count=${count}`
  const res = await axios.get(url)
  return res.data
}
export default getAPOD

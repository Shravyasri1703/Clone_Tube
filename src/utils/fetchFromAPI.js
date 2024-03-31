import axios from 'axios'


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {

  url: BASE_URL,
  params: {
    part: 'snippet',
    maxResults : 50,
    videoId: 'M7FIvfx5J10'
    
  },
  headers: {
    'X-RapidAPI-Key': 'e44e8aeaa0msh842b2d3eea8d8fdp166246jsn64003c88892a',

    //'e44e8aeaa0msh842b2d3eea8d8fdp166246jsn64003c88892a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) =>{
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
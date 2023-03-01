// services
import * as tokenService from './tokenService'

// types
import { Profile } from '../types/models'
import { GiphyFormData } from '../types/forms'



const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

const GIPHY = `https://api.giphy.com/v1/gifs/search?${import.meta.env.GIPHY_API_KEY}/&tag=dog&rating=g`

async function getGif(
  giphyFormData: GiphyFormData
): Promise<string> {
  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=dog&rating=g&api_key=${import.meta.env.GIPHY_API_KEY}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const json = await res.json()
    if (json.data && json.data.length > 0) {
      const gifUrl = json.data[0].images.original.url
      return gifUrl
    }
    throw new Error('Failed to get a GIF')
  } catch (error) {
    throw error
  }
}


async function getAllProfiles(): Promise<Profile[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile[]
  } catch (error) {
    throw error
  }
}

async function addPhoto(
  photoData: FormData, 
  profileId: number
): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json() as string
  } catch (error) {
    throw error
  }
}

export { getAllProfiles, addPhoto, getGif }

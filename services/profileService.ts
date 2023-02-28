// services
import * as tokenService from './tokenService'

// types
import { Profile } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`
const GIPHY_URL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_BACK_END_SERVER_URL}&q=dog&limit=25&offset=0&rating=g&lang=en`


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

async function makeGif(
  profileId: number,
  gifData: string,
): Promise<string> {
  try {
    const res = await fetch(`${GIPHY_URL}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: gifData
    })
    return await res.json() as string
  } catch (error) {
    throw error
  }
}

export { getAllProfiles, addPhoto, makeGif }

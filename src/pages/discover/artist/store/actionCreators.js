import { getArtist } from '@/api/artist'
import * as actionTypes from './constans'

export const changeArtistAction = (artistList)=>({
  type:actionTypes.CHANGE_ARTIST_LIST,
  artistList
})

export const getArtistAction = (type,area,limit,offset)=>{
  return dispatch=>{
    getArtist(type,area,limit,offset).then(res=>{
      dispatch(changeArtistAction(res.data.artists))
    })
  }
}
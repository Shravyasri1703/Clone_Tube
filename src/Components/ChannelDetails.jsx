import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard} from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetails = () => {
   const[channelDetail, setchannelDetail] = useState(null)
   const[videos, setVideos] = useState([])
  const { id } = useParams()
  console.log(channelDetail)
  useEffect(() => {
     fetchFromAPI(`channels?part="snippet&id=${id}`)
     .then((data) => setchannelDetail(data?.items[0]))

     fetchFromAPI(`search?channelId=${id}&part="snippet&id&order=date`)
     .then((data) => setchannelDetail(data?.items[0]))
  }, [id])
  return (
   <Box minHeight='95vh'>
    <Box>
      <div 
          style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(34,87,163,1) 37%, rgba(0,212,255,1) 100%)',
            zIndex: 10, height: '300px'
          }}
        
      />
        <ChannelCard channelDetail={channelDetail} marginTop ='-110px'></ChannelCard>
    </Box>
   <Box display='flex' p='2'>
      <Box sx={{ mr: { sm: '100px' }}} />
       <Videos videos={videos} />
     
   </Box>
   </Box>
  )
}

export default ChannelDetails
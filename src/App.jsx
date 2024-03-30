import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetails, SearchFeed} from './Components'
 const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
    <Routes>
      <Route path='/' exact element={<Feed />} />
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetails />} />
      <Route path='/search/searchTerm' element={<SearchFeed />} />
    </Routes>
    </Box>
  </BrowserRouter>
 )

export default App

import React, { useState } from 'react'
import { Box } from '@mui/material'
import Banner from '../Components/Banner'
import Exercises from '../Components/Exercises'
import SearchExercises from '../Components/SearchExercises'

const Home = () => {
  return (
    <Box>
      <Banner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home

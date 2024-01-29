import React, { useState } from 'react';
import { Box } from '@mui/material';
import Banner from '../Components/Banner';
import Exercises from '../Components/Exercises';
import SearchExercises from '../Components/SearchExercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <Banner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home

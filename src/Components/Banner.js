import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import BannerImage from '../assets/images/banner.png'

const Banner = () => {
  return (
    <Box sx={{
        mt: {lg: '150px', xs: '70px'},
        ml: {sm: '50px'},
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Anton's Fitness Page
        </Typography>

        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        mb='23px'
        mt='30px'>
            Get your dream body 
        </Typography>

        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Check out the best way to build muscle
        </Typography>

        <Button variant='contained' color='error' href='#exercises' 
        sx={{ backgroundColor: '#FF2625', padding: '10px'}}>
            Explore Exercises
        </Button>

        <Typography fontWeight={600}
        color='#FF2625'
        sx={{opacity: '0.1', display: {lg: 'block', xs: 'none'}}}
        fontSize='200px' mt="80px">
            Exercise
        </Typography>
        <img src={BannerImage} alt='banner' className='hero-banner-img'></img>
    </Box>
  )
}

export default Banner

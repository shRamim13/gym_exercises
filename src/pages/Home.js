import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Component/HeroBanner'
import SearchExercises from '../Component/SearchExercises'
import Exercises from '../Component/Exercises'
const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    )
}

export default Home
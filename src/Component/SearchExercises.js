import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
const SearchExercises = () => {

    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        if (search) {
            // const exercisessData = await fetchData
        }
    }

    return (
        <Stack alignItems="center" mt='37px' justifyContent='center' p='20px'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb='50px' textAlign='center' >
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '1170px', xs: '350px' }
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text' />
                <Button sx={{
                    bgcolor: ' #ff2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: "80px" },
                    fontSize: { lg: '20px', xs: '14px' },
                    height: '56px',
                    //position: 'absolute'
                }} onClick={handleSearch}>Search</Button>
            </Box>
        </Stack>
    )
}

export default SearchExercises
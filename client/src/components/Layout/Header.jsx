import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../../constants/color'

const Header = () => {

    const handleMobile ={
        console.log(Mobile);
    }
  return <>
    
    <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position="static" sx={{bgcolor:orange }} >
            <Toolbar>


                <Typography variant='h6'
                   sx={{
                    display:{ xs:"none" , sm:"block"}
                   }}
                >
                    Chat App
                </Typography>


               <Box
                sx={{
                    display:{ xs:"block", sm:"none"}
                }}
               >
                   <IconButton color='inherit' onClick={handleMobile}></IconButton>
               </Box>


            </Toolbar>

        </AppBar>
    </Box>

  </>
}

export default Header

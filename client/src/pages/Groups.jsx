import React, { useState } from 'react'
import { Grid, IconButton, Box, Tooltip, Drawer } from "@mui/material"
import { KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { matBlack } from "../constants/color";
import { useNavigate } from "react-router-dom";

const Groups = () => {

  const navigate = useNavigate();
  const [isMobileMenuOpen, setisMobileMenuOpen ] = useState(false);
  const navigateBack = () => {
    navigate("/");
  }
  
  const handleMobile =() =>{
    setisMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => setisMobileMenuOpen(false);
  const IconBtns = <>

    <Box sx={{
      display: {
        xs: "block",
        sm: "none",
        position: "fixed",
        right: "1rem",
        top: "1rem",
      },
    }}>
      <Tooltip title="Menu">
        <IconButton onClick={handleMobile} >
          <MenuIcon />
        </IconButton>
      </Tooltip>

    </Box>
    <Tooltip title="back">
      <IconButton
        sx={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          bgcolor: matBlack,
          color: "white",
          ":hover": {
            bgcolor: "rgba(0,0,0,0.6)",
          },
        }}
        onClick={navigateBack}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>;
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        bgcolor={"bisque"}
      >
     <GroupList />
      </Grid>


      <Grid item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >

        {
          IconBtns
        }

      </Grid>
      <Drawer sx={{
        display:{
          xs: "block",
          sm: "none",
        },
      }} open={isMobileMenuOpen} onClose={handleMobileClose}>
      <GroupList  w={"50vw"} />
      </Drawer>
    </Grid>
  )
}

const GroupList =() => {};

export default Groups

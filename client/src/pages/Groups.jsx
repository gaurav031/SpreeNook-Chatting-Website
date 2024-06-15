import React from 'react'
import { Grid } from "@mui/material";
import { orange } from '@mui/material/colors';

const Groups = () => {
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
        Group List
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
      > Go Dertials</Grid>
    </Grid>
  )
}

export default Groups

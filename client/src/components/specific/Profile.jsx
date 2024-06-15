import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar 
        sx={{
          width:200,
          height:200,
          objectFit:"contain",
          marginBottom:"1rem",
          border:"2px solid white",
        }}
      />
      <ProfileCard heading={"bio"} text={"GAurav"} />
      <ProfileCard heading={"Usernme"} text={"gaurav031"}  Icon={<UserNameIcon />}/>
      <ProfileCard heading={"Name"} text={"GauravKumar"} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment("2023-11-04T18:30:00.000Z").fromNow()} Icon={<CalendarIcon />} />
    </Stack>
  )
}

const ProfileCard =({ text, Icon, heading}) => (
  <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} color={"white"} textAlign={"center"}>
     {Icon && Icon}
     <Stack>
      <Typography variant='body1'>{text}</Typography>
      <Typography color={'grey'} variant="caption" >{heading}</Typography>

      
     </Stack>
  </Stack>
)
export default Profile

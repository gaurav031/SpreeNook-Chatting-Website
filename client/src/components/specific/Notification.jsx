import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from '@mui/material';
import React, { memo } from 'react';
import { SampleNotifications } from '../../constants/sampleData';
const Notification = () => {

  const friendRequestHandler =({_id, accept}) =>{

  }
  return (
   <Dialog open >
    <Stack p={{xs:"1rem", sm:"2rem"}} maxWidth={"25rem"}>
      <DialogTitle>Notification</DialogTitle>

      {
        SampleNotifications.length > 0 ? (
          SampleNotifications.map(({sender,_id}) => <NotificationItem sender={sender}  _id={_id}
           handler={friendRequestHandler}
           key={_id}
          />)
        ):(
          <Typography textAlign={"centre"}>0 Notificaion</Typography>
        )
      }

    </Stack>
   </Dialog>
  )
}

const  NotificationItem =memo(({ sender,_id,handler }) =>{
  const { name , avatar} = sender;
  return (
    <ListItem>
        <Stack
            direction={"row"}
            spacing={"1rem"}
            alignItems={"center"}
            width={"100%"}
        >
            <Avatar />
            <Typography 
             variant='body1'
             sx={{
                flexGlow :1,
                display:"-webkit-flex",
                WebkitLineClamp:1,
                WebkitBoxOrient:"vertical",
                overflow:"hidden",
                textOverflow:"ellipsis",
                width:"100%"
             }}
            >{`${name} sent you a friend request..`}</Typography>
           
           <Stack
             direction={{
              xs:"column",
              sm:"row",
             }}
           >
            <Button onClick={()=> handler({_id,accept:true})}>Accept</Button>
            <Button  color="error" onClick={()=> handler({_id,accept:false})}>Reject</Button>
           </Stack>
        </Stack>
    </ListItem>
)

})
export default Notification

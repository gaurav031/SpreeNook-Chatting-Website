import React, { useRef } from 'react'
import {AppLayout} from "../components/Layout/AppLayout.jsx"
import { IconButton, Stack } from '@mui/material';
import { greyColor, orange } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { SampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  _id: "cndcjc",
  name: "gaurav"
}

const chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={greyColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >


        {
          SampleMessage.map((i) => (
            <MessageComponent key={i._id} message={i} user={user} />
          ))
        }



      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >

        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"centre"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder='Type Your Message here......... ' />

          <IconButton
            type='submit'
            sx={{
              rotate: "-10deg",
              bgcolor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark"
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>


      </form>
      <FileMenu />
    </>
  )
}

export default AppLayout()(chat);


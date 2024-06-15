import React, { memo } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Link } from "../styles/StyledComponents";
import AvatarCard from "../shared/AvatarCard"; // Ensure this path is correct based on your project structure

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChat,
}) => {
    return (
        <Link sx={{ padding: "0" }} to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1rem",
                    alignItems: "center", // Fixed typo here
                    backgroundColor: sameSender ? "black" : "unset",
                    color: sameSender ? "white" : "unset",
                    position: "relative",
                }}
            >
                <AvatarCard avatar={avatar} />
                <Stack>
                    <Typography>{name}</Typography>
                    {newMessageAlert && (
                        <Typography>{newMessageAlert.count} New Message</Typography>
                    )}
                </Stack>
                {isOnline && (
                    <Box
                        sx={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "green",
                            position: "absolute",
                            top: "50%",
                            right: "1rem",
                            transform: "translateY(-50%)",
                        }}
                    />
                )}
            </div>
        </Link>
    );
}

export default memo(ChatItem);

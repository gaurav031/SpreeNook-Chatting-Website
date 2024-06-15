import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'

const ChatList = ({
    w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [
        {
            chatId: "",
            count: 0,
        },
    ],
    handleDeleteChat,
}) => {
    return (
        <Stack width={w} direction={"column"}>
            {
                chats?.map((data, index) => {
                    const { avatar, _id, name, groupChat, members } = data;

                    const newMessageAlert = newMessagesAlert.find(
                        ({ chatId }) => chatId === _id
                    );
                    const isOnlne = members?.some((members) => onlineUsers.includes(_id));
                    return (
                        <ChatItem
                            index={index}
                            newMessageAlert={newMessageAlert}
                            isOnlne={isOnlne}
                            avatar={avatar}
                            name={name}
                            _id={_id}
                            key={_id}
                            groupChat={groupChat}
                            sameSender={chatId === _id}
                            handleDeleteChat={handleDeleteChat}
                        />
                    );
                })
            }
        </Stack>
    )
}

export default ChatList

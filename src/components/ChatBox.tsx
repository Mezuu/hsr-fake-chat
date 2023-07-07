import { Box, Heading, Text } from "@chakra-ui/react";
import { MessageBox } from "./MessageBox";
import { SendMessageBox } from "./SendMessageBox";
import { useState } from 'react'
import data from '../data/default.json'

export function ChatBox() {

    const [chatData, setChatData] = useState<ChatData>(data)
    const [render, rerender] = useState<boolean>(false)

    const triggerRerender = () => {
        rerender(!render)
    }

    function updateMessage(index: number, message: string) {
        let tempChatData = chatData
        tempChatData.messages[index].message = message
        setChatData(tempChatData)
    }

    /**
     * Render a chat header with the given param `chatData` obtained
     * from parent `ChatBox`. Contains receiver's name and their bio
     * @internal
     */
    function ChatHeader() {
        return <Box className="w-full py-4 px-6 border-hsr-gray-light border-b-2">
            <Heading as='h4' size='md' className="text-hsr-gray-dark">
                {chatData.receiver.name}
            </Heading>
            <Text className="text-hsr-gray-light">{chatData.receiver.bio}</Text>
        </Box>
    }

    return <Box className="bg-hsr-container-bg mx-4 h-[80vh] relative">
        <ChatHeader />
        <Box className="w-full h-10 absolute z-10 from-hsr-container-bg to-transparent bg-gradient-to-b"></Box>
        <Box className="px-6 h-[70%] overflow-y-scroll">
            {chatData.messages.map((item, i) => {
                return <MessageBox key={i} index={i}
                    name={item.isSender ? chatData.user.name
                        : chatData.receiver.name}
                    isSender={item.isSender}
                    imageSrc={item.isSender ? chatData.user.imageSrc!
                        : chatData.receiver.imageSrc}
                    message={item.message}
                    updateMessage={updateMessage}
                />
            })}
        </Box>

        <Box>
            <SendMessageBox chatData={chatData} setChatData={setChatData} triggerRerender={triggerRerender} />
        </Box>
    </Box>
}
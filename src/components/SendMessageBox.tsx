import { Avatar, Box, Button, HStack, Input, Select, Text } from "@chakra-ui/react";
import { useState, useRef } from 'react'

export function SendMessageBox({ chatData, setChatData, triggerRerender }:
    { chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {

    const [message, setMessage] = useState<string>("")
    const [isSender, setIsSender] = useState<boolean>(true)
    const messageRef = useRef<HTMLInputElement>(null)

    function handleSendMessage() {
        let tempChatData = chatData
        tempChatData.messages.push({ isSender: isSender, message: message })
        setChatData(tempChatData)
        messageRef.current!.value = ""
        triggerRerender()
    }

    return <Box className="p-4 border-t-[1]">
        <HStack spacing={2}>
            <Box>
                <Text className="text-hsr-gray-dark">Send as :</Text>
            </Box>
            <Box flex={2} className="bg-hsr-message-sender">
                <Select
                    onChange={(ev) => { setIsSender(ev.target.value == chatData.user.name) }}
                    defaultValue={chatData.user.name}>
                    <option value={chatData.receiver.name}> {chatData.receiver.name}</option>
                    <option value={chatData.user.name}>{chatData.user.name}</option>
                </Select>
            </Box>
            <Box flex={8} className="bg-hsr-message-receiver text-hsr-gray-light">
                <Input ref={messageRef} placeholder="Input message here ..." onChange={(ev) => { setMessage(ev.target.value) }} />
            </Box>
            <Button flex={1} colorScheme="blue" onClick={handleSendMessage}>Send</Button>
        </HStack>
    </Box>
}
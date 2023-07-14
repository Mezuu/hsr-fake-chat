import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useState, useRef } from 'react'

export var sendMessageRef: React.RefObject<HTMLDivElement>

export function SendMessageBox({ chatData, setChatData, triggerRerender }:
    { chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {
    sendMessageRef = useRef<HTMLDivElement>(null)

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

    return <Box ref={sendMessageRef} className="px-4 py-2 lg:py-4 border-t-[1]">
        <Flex className="flex-col lg:flex-row gap-2">
            <Box>
                <Text className="text-hsr-gray-dark text-sm lg:text-base">Send as :</Text>
            </Box>
            <Box flex={2} className="bg-hsr-message-sender">
                <Select
                    onChange={(ev) => { setIsSender(ev.target.value == chatData.user.name) }}
                    defaultValue={chatData.user.name}>
                    <option value={chatData.receiver.name}> {chatData.receiver.name}</option>
                    <option value={chatData.user.name}>{chatData.user.name}</option>
                </Select>
            </Box>
            <Flex flex={8} gap={2}>
                <Box flex={8} className="bg-hsr-message-receiver text-hsr-gray-light">
                    <Input ref={messageRef} placeholder="Input message here ..." onChange={(ev) => { setMessage(ev.target.value) }} />
                </Box>
                <Button flex={2} colorScheme="blue" onClick={handleSendMessage} className="py-2">Send</Button>
            </Flex>
        </Flex>
    </Box>
}
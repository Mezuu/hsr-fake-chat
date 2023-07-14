import { Box, Flex, Text } from "@chakra-ui/react";
import { MessageBox } from "./MessageBox";
import { SendMessageBox } from "./SendMessageBox";
import { useRef } from "react";

export var chatBoxRef: React.RefObject<HTMLDivElement>

export function ChatBox({ chatData, setChatData, triggerRerender }:
    { chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {

    chatBoxRef = useRef<HTMLDivElement>(null)
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
        return <Box className="w-full py-3 lg:py-4 px-3 lg:px-6 border-hsr-gray-light border-b-2">
            <Text as='h5' className="text-hsr-gray-dark text-base lg:text-xl font-bold">
                {chatData.receiver.name}
            </Text>
            <Text className="text-hsr-gray-light text-sm lg:text-base">{chatData.receiver.bio}</Text>
        </Box>
    }

    return <Box ref={chatBoxRef} backgroundImage="url('/bg.png')" backgroundSize='cover'>
        <Box className="py-2 lg:py-12 px-4 lg:px-12">
            <Box className="bg-hsr-container-bg">
                <Flex direction='column' justifyContent='space-between'>
                    <Box className="grow pb-8">
                        <ChatHeader />
                        {/* <Box className="h-10 absolute z-10 from-hsr-container-bg to-transparent bg-gradient-to-b"></Box> */}
                        <Box className="lg:px-6 overflow-y-scroll w-full max-h-[26em] min-h-[26em] lg:max-h-[28em] lg:min-h-[28em]">
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
                    </Box>
                    <Box className="w-full">
                        <SendMessageBox chatData={chatData} setChatData={setChatData} triggerRerender={triggerRerender} />
                    </Box>
                </Flex>
            </Box>
        </Box>
    </Box>
}
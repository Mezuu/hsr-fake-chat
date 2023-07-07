import { Box, Text } from "@chakra-ui/react";
import { MessageBox } from "./MessageBox";
import { SendMessageBox } from "./SendMessageBox";

export function ChatBox({ chatData, setChatData, triggerRerender }:
    { chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {

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
            <Text as='h5' className="text-hsr-gray-dark text-xl font-bold">
                {chatData.receiver.name}
            </Text>
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
import { Box, Flex, Text, Avatar, Editable, EditablePreview, EditableInput, Center } from "@chakra-ui/react";

export function MessageBox({ index, name, imageSrc, isSender, message, updateMessage }:
    { index: number, name: string, imageSrc: string, isSender: boolean, message: string, updateMessage: (index: number, message: string) => void }) {

    function handleMessageChange(val: string) {
        updateMessage(index, val)
    }

    function ProfilePicture() {
        return <Avatar className="rounded-full" src={imageSrc} size='lg' />
    }

    function Message() {
        return <Flex className={`px-4 py-0 relative flex-col`}>
            <Text className={`text-hsr-gray-light ${isSender ? 'text-right' : ''}`}>{name}</Text>
            <Box className="w-full">
                <Center
                    className={[`mt-2 py-1 px-3 rounded-xl w-max text-lg ${isSender ? 'bg-hsr-message-sender' : 'bg-hsr-message-receiver'} 
                text-hsr-gray-dark`, isSender ? 'rounded-tr-none float-right' : 'rounded-tl-none'].join(" ")}>
                    <Editable defaultValue={message} onChange={handleMessageChange}>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Center>

            </Box>
        </Flex>
    }

    return <Flex
        className="py-2 px-4" direction={isSender ? 'row-reverse' : 'row'}
        justifyContent={isSender ? 'end' : 'start'}>
        <ProfilePicture />
        <Message />
    </Flex>
}
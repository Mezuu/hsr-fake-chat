import { Box, Flex, Text, Avatar, Editable, EditablePreview, EditableInput } from "@chakra-ui/react";

export function MessageBox({ index, name, imageSrc, isSender, message, updateMessage }:
    { index: number, name: string, imageSrc: string, isSender: boolean, message: string, updateMessage: (index: number, message: string) => void }) {

    function handleMessageChange(val: string) {
        updateMessage(index, val)
    }

    function ProfilePicture() {
        return <Avatar className="rounded-full" src={imageSrc} size='lg' />
    }

    function Message() {
        return <Box className="px-4 py-0 relative">
            <Text className={`text-hsr-gray-light ${isSender ? 'text-right' : ''}`}>{name}</Text>
            <Box
                className={[`mt-2 py-2 px-3 rounded-xl ${isSender ? 'bg-hsr-message-sender' : 'bg-hsr-message-receiver'} 
                text-hsr-gray-dark`, isSender ? 'rounded-tr-none' : 'rounded-tl-none'].join(" ")}>
                <Editable defaultValue={message} onChange={handleMessageChange}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </Box>
        </Box>
    }

    return <Flex
        className="py-2 px-4" direction={isSender ? 'row-reverse' : 'row'}
        justifyContent={isSender ? 'end' : 'start'}>
        <ProfilePicture />
        <Message />
    </Flex>
}
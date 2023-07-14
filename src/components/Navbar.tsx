import { Box, Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SidebarDrawer } from './SidebarDrawer'

export function Navbar({ chatData, setChatData, triggerRerender }:
    { chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return <Box className='fixed top-0 z-10 w-full'>
        <Flex className='bg-hsr-gray-dark lg:px-2 lg:h-16' justifyContent='space-between' alignItems='center'>
            <Heading as='h2' size={['sm', 'sm', 'md']} className='pl-4'>hsr-fake-chat</Heading>
            <Box className='block lg:hidden'>
                <Button onClick={onOpen}><FontAwesomeIcon icon={faGear} size='xs' /></Button>
            </Box>
            <SidebarDrawer isOpen={isOpen} onClose={onClose} chatData={chatData} setChatData={setChatData} triggerRerender={triggerRerender} />
        </Flex>
    </Box>
}
import { Badge, Box, Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SidebarDrawer } from './SidebarDrawer'

export function Navbar({ chatData, setChatData, triggerRerender }:
    { chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return <Flex className='w-screen bg-hsr-gray-dark p-2 h-16' justifyContent='space-between' alignItems='center'>
        <Heading as='h2' size='md'>hsr-fake-chat <Badge colorScheme='blue'>BETA</Badge></Heading>
        <Box className='block lg:hidden'>
            <Button onClick={onOpen}><FontAwesomeIcon icon={faGear} /></Button>
        </Box>
        <SidebarDrawer isOpen={isOpen} onClose={onClose} chatData={chatData} setChatData={setChatData} triggerRerender={triggerRerender} />
    </Flex>
}
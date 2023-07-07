import { Sidebar } from "./Sidebar";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerOverlay, DrawerHeader, DrawerContent, DrawerFooter, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export function SidebarDrawer({ isOpen, onClose, chatData, setChatData, triggerRerender }:
    { isOpen: boolean, onClose: () => void, chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {

    return <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
    >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><FontAwesomeIcon icon={faGear} /> Settings</DrawerHeader>

            <DrawerBody>
                <Sidebar chatData={chatData} setChatData={setChatData} triggerRerender={triggerRerender} />
            </DrawerBody>

            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>Cancel</Button>
                <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
}
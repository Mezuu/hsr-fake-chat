import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from "@chakra-ui/react";
import characters from '../data/characters.json'
import { useEffect, useRef, useState } from 'react'
import { chatBoxRef } from "./ChatBox";
import html2canvas from "html2canvas";
import { sendMessageRef } from "./SendMessageBox";

export function Sidebar({ chatData, setChatData, triggerRerender }:
    { chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {

    const [screenshot, takeScreenshot] = useState<boolean>(false)
    const resultRef = useRef<HTMLDivElement>(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [image, setImage] = useState<string>('')

    function handleChangeContact(ev: any) {
        let tempChatData = chatData
        tempChatData.receiver.name = ev.target.value
        tempChatData.receiver.imageSrc = characters.filter((item) => item.name == ev.target.value)[0].imageSrc
        tempChatData.receiver.bio = characters.filter((item) => item.name == ev.target.value)[0].bio
        setChatData(tempChatData)
        triggerRerender()
    }

    function handleChangeName(ev: any) {
        let tempChatData = chatData
        tempChatData.user.name = ev.target.value
        setChatData(tempChatData)
        triggerRerender()
    }

    function handleScreenshot() {
        takeScreenshot(!screenshot)
    }

    function handleDelete() {
        let tempChatData = chatData
        tempChatData.messages = []
        setChatData(tempChatData)
        triggerRerender()
    }

    useEffect(() => {
        if (screenshot) {
            onOpen()
            sendMessageRef.current!.style.display = "none"
            html2canvas(chatBoxRef.current!).then((canvas) => {
                setImage(canvas.toDataURL('image/png'))
                sendMessageRef.current!.style.display = "inline-block"
                sendMessageRef.current!.setAttribute('width', "100")
            })
            takeScreenshot(false)
        }
    })

    return <><Modal isOpen={isOpen} onClose={onClose} size='6xl'>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Result</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box ref={resultRef}>
                    <Image src={image}></Image>
                </Box>
            </ModalBody>
            <ModalFooter />
        </ModalContent>
    </Modal>
        <Flex className="flex-col justify-between h-full p-2 text-gray-300">
            <Box>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>Select Contact</FormLabel>
                        <Select onChange={handleChangeContact}>
                            {characters.map((item, i) => {
                                return <option key={i} value={item.name}>{item.name}</option>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Trailblaze Name</FormLabel>
                        <Input type="text" defaultValue="Trailblaze" onChange={handleChangeName} />
                    </FormControl>
                    <Stack>
                        <Button colorScheme="blue" onClick={handleScreenshot}>
                            Take Screenshot
                        </Button>
                        <Button colorScheme="red" onClick={handleDelete}>
                            Delete All Messages
                        </Button>
                    </Stack>
                    <Box>

                    </Box>
                </Stack>
            </Box>
            <Box>
                <Flex>
                    <Link href="https://github.com/Mezuu/hsr-fake-chat" isExternal>
                        <Image src='/github-mark-white.svg' w={8} className="opacity-60 hover:opacity-80" />
                    </Link>
                </Flex>
            </Box>
        </Flex></>
}
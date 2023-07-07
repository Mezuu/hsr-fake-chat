import { ChatBox } from './components/ChatBox'
import { Navbar } from './components/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from './components/Sidebar'
import { useState } from 'react'
import data from './data/default.json'

function App() {

  const [chatData, setChatData] = useState<ChatData>(data)
  const [render, rerender] = useState<boolean>(false)

  const triggerRerender = () => {
    rerender(!render)
  }

  return <>
    <Navbar chatData={chatData} setChatData={setChatData} triggerRerender={triggerRerender} />
    <main className="backdrop-blur-0">
      <Flex>
        <Box flex={5}>
          <ChatBox chatData={chatData} setChatData={setChatData} triggerRerender={triggerRerender} />
        </Box>
        <Box flex={2} className='hidden lg:block p-4'>
          <Sidebar chatData={chatData} setChatData={setChatData} triggerRerender={triggerRerender} />
        </Box>
      </Flex>
    </main>
  </>
}

export default App

import { ChatBox } from './components/ChatBox'
import { Navbar } from './components/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from './components/Sidebar'

function App() {

  return <>
    <Navbar />
    <main className="backdrop-blur-0">
      <Flex>
        <Box flex={5}>
          <ChatBox />
        </Box>
        <Box flex={2} className='hidden lg:block p-4'>
          <Sidebar />
        </Box>
      </Flex>
    </main>
  </>
}

export default App

import { Box, Center, Stack, Text } from "@chakra-ui/react";

export function Footer() {
    return <Box className="p-1 lg:p-4">
        <Center>
            <Stack className="text-center text-gray-300 text-xs lg:text-sm">
                <Text>Copyright &copy; 2023 - Created by Mezuu</Text>
                <Text>This site is not affiliated with HoYoverse, all game assets and contents are trademarks and copyrights of HoYoverse</Text>
            </Stack>
        </Center>
    </Box>
}
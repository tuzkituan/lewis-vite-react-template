import { useState } from 'react';

import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

import reactLogo from '@/assets/react.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box w="100%" h="100vh" p={6}>
      <Flex
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        h="100%"
        gap={4}
      >
        <Center>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <Image src="/vite.svg" className="logo" alt="Vite logo" w="10vw" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <Image
              src={reactLogo}
              className="logo react"
              alt="React logo"
              w="10vw"
            />
          </a>
        </Center>
        <Text fontWeight="bold">
          Vite + React + Chakra UI + React Router v6 + Redux Toolkit + Eslint
        </Text>
        <Center>
          <Button
            colorScheme="cyan"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            count is {count}
          </Button>
        </Center>
        <Center>
          <Text fontSize={16}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </Center>
        <Text fontSize={12}>
          Click on the Vite and React logos to learn more
        </Text>
      </Flex>
    </Box>
  );
}

export default Home;

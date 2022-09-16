import { useState } from 'react';

import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Box w="100%" h="100vh" paddingInline={10} paddingBlock={6}>
      <Flex
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        h="100%"
        gap={6}
      >
        <Center>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <Image src="/vite.svg" className="logo" alt="Vite logo" w="15vw" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <Image
              src="./react.svg"
              className="logo react"
              alt="React logo"
              w="15vw"
            />
          </a>
        </Center>
        <Text
          fontWeight="bold"
          fontSize={24}
          textAlign="center"
          letterSpacing={2}
        >
          HELLO WORLD
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
          <Text fontSize={32}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </Center>
        <Text fontSize={16}>
          Click on the Vite and React logos to learn more
        </Text>
      </Flex>
    </Box>
  );
};

export default Home;

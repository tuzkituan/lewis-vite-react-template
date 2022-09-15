import { Link } from 'react-router-dom';

import { Box, Center, Flex, Text } from '@chakra-ui/react';

function NotFound() {
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
          <Text fontSize={100} fontWeight="bold">
            404
          </Text>
          <Text fontSize={24} fontWeight="bold" pl={2}>
            not found
          </Text>
        </Center>
        <Center>
          <Link to="/">
            <Text
              fontSize={12}
              textTransform="uppercase"
              fontWeight={500}
              letterSpacing={1.2}
              color="cyan"
            >
              Return home
            </Text>
          </Link>
          <Center />
        </Center>
      </Flex>
    </Box>
  );
}

export default NotFound;

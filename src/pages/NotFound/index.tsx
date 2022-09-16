import { Link } from 'react-router-dom';

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

const NotFound = () => (
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
          <Button
            fontSize={12}
            textTransform="uppercase"
            fontWeight={700}
            letterSpacing={1.2}
            colorScheme="brand"
          >
            Return home
          </Button>
        </Link>
        <Center />
      </Center>
    </Flex>
  </Box>
);

export default NotFound;

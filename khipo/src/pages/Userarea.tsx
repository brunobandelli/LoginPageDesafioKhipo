import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Flex,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
  
  // Replace test data with your own
  const features = Array.apply(null, Array(4)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });
  
  export default function Userarea() {
    return (
      
      <div >
      <Navbar/>
      <Flex>
      <Box w='300px'>
      <SideBar children={undefined}/>
      </Box>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'2xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>This is the headline</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </Text>
        </Stack>
  
        <Container  maxW={'4xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      </Flex>
      </div>
    );
  }
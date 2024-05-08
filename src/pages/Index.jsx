import { Box, Button, Container, Heading, Text, VStack, Image, useColorModeValue, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

// Extend the theme to include custom colors, fonts, etc.
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "gray.900",
        color: "white",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});

const Index = () => {
  const bgBlur = useColorModeValue("whiteAlpha.700", "whiteAlpha.200");

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={8} p={5} backdropFilter="auto" backdropBlur="10px" bg={bgBlur} borderRadius="2xl" boxShadow="xl" padding="40px">
          <Image src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDB8fHx8MTcxNTE5MTQ4Nnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" alt="Iraglass Logo" />
          <Heading as="h1" size="2xl">
            Iraglass
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Revolutionizing the way you experience software with cutting-edge design and unparalleled ease of use.
          </Text>
          <Button rightIcon={<FaRocket />} colorScheme="purple" variant="solid" size="lg">
            Get Started
          </Button>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;

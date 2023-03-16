import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import {Image} from '@chakra-ui/react'
import { format } from 'path'
  export const Header = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="bg-surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
              <Image src='data:image/jpeg;base64,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' w='80px' h="80px" />
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                      <Button key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button variant="ghost">Sign in</Button>
                    <Button variant="primary">Sign up</Button>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }
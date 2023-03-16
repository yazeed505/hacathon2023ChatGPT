import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Text
  } from '@chakra-ui/react'

export function MainSection (){
    return(
        <Box display='flex' width='100%' h='500px' backgroundImage='https://www.aljazeera.net/wp-content/uploads/2022/10/shutterstock_1708370740.jpg?resize=1800%2C1800' objectFit='cover' textAlign='center' >
            <Text color='white' fontSize='50px' m='auto' justifySelf='auto'  fontFamily='Brush Script MT'> 
             منصة اقلط
             <br/>
             هي منصة لمساعدة السياح في الاستمتاع وتجربة مخلتف الثقافات من جكيع مناطق المملكة    
             </Text>
        </Box>
    )
}
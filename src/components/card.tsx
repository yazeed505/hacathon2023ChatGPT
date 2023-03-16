import { CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import * as ui from '@chakra-ui/react'
export function Card (){

    const loopFunc = () => {
            return <ui.Card maxW='sm' w="30%" m='2'>
            <ui.CardBody>
              <ui.Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <ui.Stack mt='6' spacing='3'  dir='rtl'>
                <ui.Heading size='md' dir='RTL'>تجربة طبخ المندي</ui.Heading>
                <ui.Text dir='rtl'>
                  في هذه التجربة تستطيع معرفة رحلة المندي وتاريخه وكيف نشأ بالاضاف’ة الى <br/>
                  طبخه مع شخص مختص في هذه الاكلة
                </ui.Text>
                <ui.Text color='#ff6666' fontSize='2xl'>
                   ريال450
                </ui.Text>
              </ui.Stack>
            </ui.CardBody>
            <ui.Divider />
            <CardFooter>
              <ui.ButtonGroup spacing='2'  m='auto'>
                <ui.Button variant='solid' color='#ff6666'>
                  احجز مقعدك
                </ui.Button>
                {/* <ui.Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </ui.Button> */}
              </ui.ButtonGroup>
            </CardFooter>
          </ui.Card>
        }
    
    return (
        <ui.Box m='10'
         display="flex"
          flexDirection='row'
          flexWrap='wrap'
          w='90%'
          maxWidth='100%'
          justifyContent='space-around'
          >
{loopFunc()}
{loopFunc()}
{loopFunc()}
{loopFunc()}
{loopFunc()}
{loopFunc()}


</ui.Box>
    )}  
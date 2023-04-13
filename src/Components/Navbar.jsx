
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  Image,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


export default function Navbar() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box onClick={()=>{ navigate("/")}}><Image ml={'50px'} w={"150px"} src="https://paymonk.com/wp-content/uploads/2021/11/PayMonk_Logo-300x110.png" /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'md'}
                  src={
                    'https://media.licdn.com/dms/image/D4D03AQFGCxYC2tf-7g/profile-displayphoto-shrink_400_400/0/1679560814912?e=1686787200&v=beta&t=vVAkdqKWfDvHN5Fa5xVYo-y8hFoWPPwrTokdfhfVpcM'
                  }
                />
              </MenuButton>
             
            </Menu>
          </Flex>
        </Flex>
</Box>

   
    </>
  );
}
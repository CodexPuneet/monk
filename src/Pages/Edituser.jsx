import React from 'react';
import './user.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  FormHelperText,
  Text,
  Center,
  Image,
  useToast,
} from '@chakra-ui/react';

const Edituser = () => {
  const toast = useToast(); // Initialize toast notification
  const navigate = useNavigate(); // Access the navigation methods
  const [list, setList]= React.useState({}); // Initialize state for user details
  const [show, setShow]= React.useState(false); // Initialize state for showing user details or edit form
  const [data, setData] = React.useState({ // Initialize state for edit form data
    first_name: '',
    last_name: '',
    avatar: '',
    email: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let id= localStorage.getItem('paymonk'); // Get user ID from local storage
    axios.put(`https://reqres.in/api/users/${id}`, data) // Make PUT request to update user data
      .then((res) => {
        toast({ // Show success toast notification
          title: 'Congrats.',
          description: "Updated the data",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setShow(!show); // Hide edit form and show updated user details
        setList(res.data);
      })
      .catch((err) => {
        toast({ // Show error toast notification
          title: 'Oops.',
          description: "Something Went Wrong. Try Again",
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };


  return (<Box>
    <Text className="glow">Edit Users</Text>
    <Box className='form'>
      {/* Show edit form if "show" state is false */}
      {
        !show && (
          <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              name='first_name'
              type='text'
              value={data.first_name}
              onChange={(e) => handleChange(e)}
              placeholder='First name'
            />
            <FormLabel>Last name</FormLabel>
            <Input
              name='last_name'
              type='text'
              value={data.last_name}
              onChange={(e) => handleChange(e)}
              placeholder='Last name'
            />
            <FormLabel>Avatar</FormLabel>
            <Input
              name='avatar'
              type='url'
              value={data.avatar}
              onChange={(e) => handleChange(e)}
              placeholder='Avatar'
            />
            <FormLabel>Email</FormLabel>
            <Input
              name='email'
              value={data.email}
              type='email'
              onChange={(e) => handleChange(e)}
              placeholder='Email'
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <Center>
            <Button type='submit' mt={4} colorScheme='teal'>
              Submit
            </Button>
            </Center>
            
          </FormControl>
        </form>
        )
      }
     
    </Box>
    <Box className="user-details">
    {show && (
      <Box>
        <Image src={list.avatar} />
        <Text as="h2">{`${list.first_name} ${list.last_name}`}</Text>
        <Text> {list.email}</Text>
        <Center>
        <Button className="glow" onClick={()=>{ navigate("/")}}>Homepage</Button>
        </Center>
      </Box>
    )}
    </Box>
    </Box>
  );
};

export default Edituser;
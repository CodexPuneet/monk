// import React from 'react'
// import axios from 'axios';
// import "./user.css"
// import { useNavigate } from "react-router-dom";
// import {Text, useToast,Box, Image, Button,Center} from '@chakra-ui/react'

// const Userdetails = () => {
//   const toast = useToast()
//   const navigate = useNavigate();
//   const [list, setList]= React.useState({})

//   //taking id from local storage
//   let id= localStorage.getItem('paymonk');
//   const getData=(id)=>{
//         axios.get(`https://reqres.in/api/users/${id}`)
//         .then((res)=>setList(res.data.data))
//         .catch((err)=>{
//           toast({
//             title: 'Oops.',
//             description: "Somthing Went Wrong. Try Again",
//             status: 'error',
//             duration: 5000,
//             isClosable: true,
//           })
//         })
//       }
//       React.useEffect(()=>{
//         getData(id)
//       },[id])
//   return (
//     <Box >
//     <Text className="glow">User Details</Text>
// <Box className="user-details">
//     {list && (
//       <Box>
//         <Image src={list.avatar} />
//         <Text as="h2">{`${list.first_name} ${list.last_name}`}</Text>
//         <Text> {list.email}</Text>
//         <Center>
//         <Button className="glow" onClick={()=>{ navigate("/edit")}}>Edit</Button>
//         </Center>
//       </Box>
//     )}
//     </Box>
//   </Box>
//   )
// }

// export default Userdetails

import React from 'react';
import axios from 'axios';
import './user.css';
import { useNavigate } from 'react-router-dom';
import {
  Text,
  useToast,
  Box,
  Image,
  Button,
  Center,
} from '@chakra-ui/react';

const Userdetails = () => {
  // Use the useToast hook from Chakra UI to show toast messages
  const toast = useToast();
  // Use the useNavigate hook from react-router-dom to navigate to other pages
  const navigate = useNavigate();
  // Use React.useState to create a state variable for the list of user details
  const [list, setList] = React.useState({});

  // Get the user details by making an API call to reqres
  const getData = (id) => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => setList(res.data.data))
      .catch((err) => {
        // Handle errors by showing a toast message
        toast({
          title: 'Oops.',
          description: 'Something went wrong. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  // Use React.useEffect to call getData when the id changes
  React.useEffect(() => {
    getData(localStorage.getItem('paymonk'));
  }, [localStorage.getItem('paymonk')]);

  return (
    <Box>
      <Text className="glow">User Details</Text>
      <Box className="user-details">
  {list && Object.keys(list).length > 0 ? (
    <Box>
      <Image src={list.avatar} />
      <Text as="h2">{`${list.first_name} ${list.last_name}`}</Text>
      <Text>{list.email}</Text>
      <Center>
        <Button className="glow" onClick={() => navigate("/edit")}>
          Edit
        </Button>
      </Center>
    </Box>
  ) : (
    <Center>
      <Text>Loading...</Text>
    </Center>
  )}
</Box>



    </Box>
  );
};

export default Userdetails;


import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useToast, Image, Text, Table, Thead, Tbody, Tr, Th, Td, Center, Button, TableContainer } from '@chakra-ui/react'

// Component to display list of users
const Users = () => {
  const toast = useToast()
  const navigate = useNavigate();
  
  // state to store the list of users
  const [list, setList] = React.useState([]);
  
  // state to keep track of current page number
  const [page, setPage] = React.useState(1)

  // Function to get data from API
  const getData = (page) => {
    axios.get(`https://reqres.in/api/users?page=${page}&per_page=3`)
      .then((res) => setList(res.data.data))
      .catch((err) => {
        // Proper error handling with toast message
        toast({
          title: 'Oops.',
          description: "Something Went Wrong. Try Again",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  // useEffect to fetch data from API on page change
  React.useEffect(() => {
    getData(page)
  }, [page])

  return (
    <div>
      {/* Display header */}
      <Center>
        <Text className="glowing-text">User List</Text>
      </Center>

      {/* Display table of users */}
      <Center>
        <TableContainer mt={"25px"} w={"90%"}>
          <Table size="sm" variant='striped' colorScheme='blue'>
            <Thead>
              <Tr bg="#1d388c" >
                <Th color="white">Sr.No.</Th>
                <Th color="white">Avatar</Th>
                <Th color="white">Name</Th>
                <Th color="white">Email</Th>
                <Th color="white">Details</Th>
              </Tr>
            </Thead>
            <Tbody w={"100px"} mt={"20px"} >
              {/* Display user data */}
              {list?.length > 0 && list?.map(({ avatar, first_name, last_name, email, id }, index) => (
                <Tr key={id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Image src={avatar} />
                  </Td>
                  <Td fontWeight={"bold"} fontSize={"16px"}>{first_name + " " + last_name}</Td>
                  <Td fontWeight={"bold"} fontSize={"16px"}>{email}</Td>
                  <Td>
                    {/* Navigate to user details page */}
                    <Button border={"2px solid #1c388d"} color="#1c388d" bgColor={"white"} onClick={() => { localStorage.setItem('paymonk', id); navigate("/details") }}>
                      View
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>

      {/* Display pagination */}
      <Center>
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
        <Button>{page}</Button>
        <Button isDisabled={page === 4} onClick={() => setPage(page + 1)}>Next</Button>
      </Center>
    </div>
  )
}

export default Users

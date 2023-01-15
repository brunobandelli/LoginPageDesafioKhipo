import { Component, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik,Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";


type Props = {};

type State = {
  // redirect: string | null,
  email: string,
  password: string,
  // loading: boolean,
  // message: string
};

import axios from "axios";
import Navbar from '../components/Navbar';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    FormErrorMessage,
    useColorModeValue,
    VStack,
    useToast
  } from '@chakra-ui/react';
import { FieldValues } from "react-hook-form";

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('E-mail requerido'),
    password: yup.string().required("Senha requerida")
  });
  

  export default function Signin() {
    // const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const toast = useToast();

    
    const onRegistration = async ({ email, password}: State) => {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password
      })
      .then(res=>{
        console.log(res);
        // localStorage.setItem('token', res.data.token)
        navigate('/userarea')

    })
    .catch(err => {
        // var msgErro = err.response.data.err
        // this.error = msgErro
        toast({
          title: 'Error!',
          description: "Error when trying to log user in. Please, try again.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
    });
      // console.log(response);
      // navigate('/userarea')
    };



  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     rememberMe: false
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //     console.log(values.email)
  //     axios.post('http://localhost:3000/login',values)
  //     .then((response) => {
  //       navigate('/userarea')
  //     })
  //   },
    
  // });

    
    return (
  <div>
    <Navbar/>
    <Flex minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign In</Heading>
          </Stack>    
      <Box  rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
             
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={onRegistration}
          // onSubmit={(values) => {
          //   alert(JSON.stringify(values, null, 2));
          // }}
        >

          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.email && touched.email}  >
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value: any) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Stack spacing={10}>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
                <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button  type="submit" colorScheme="purple" width="full" bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} >
                  Sign in
                </Button>
                </Stack>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
      </Stack>
    </Flex>
    </div>
    );
  }

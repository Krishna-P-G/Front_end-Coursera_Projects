import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const initialValues = {
    firstName: "",
    email: "",
    type: "hireMe",
    comment: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    comment: Yup.string().required("Required").min(25, "Must be at least 25 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      await submit(values);
    },
    validationSchema,
  });
  

  React.useEffect(() => {
    if (response === null) {
      return;
    }
  
    if (response.type === 'success') {
      onOpen('success', `Thank you, ${formik.values.firstName}! Submission successful.`);
      formik.resetForm();
    } else if (response.type === 'error') {
      onOpen('error', response.message || 'Submission failed.');
    }
  
    // Log the response object to the console
    console.log('Response:', response);
  }, [response]);


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#F9F9F9"
      spacing={8}
      id="contactme-section"
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" size="4xl" color="#2D2E32">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName" color="#2D3E32">
                  Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  color="black"
                  borderColor="#2D3E32"
                  _hover={{ bg: "transparent" }}
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email" color="#2D3E32">
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  color="black"
                  borderColor="#2D3E32"
                  _hover={{ bg: "transparent" }}
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type" color="#2D3E32">
                  Type of enquiry
                </FormLabel>
                <Select
                  id="type"
                  name="type"
                  color="black"
                  borderColor="#2D3E32"
                  _hover={{ bg: "transparent" }}
                  {...formik.getFieldProps('type')}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment" color="#2D3E32">
                  Your message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  color="black"
                  borderColor="#2D3E32"
                  _hover={{ bg: "transparent" }}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;

import React from "react";
import {
  Avatar,
  Heading,
  VStack,
  Flex,
  Box,
  HStack,
  useBreakpointValue,
  Button,
  Image
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "./landing.css";
import pfp from "../images/pfp.jpg";

const greeting = "Full-Stack React &nbsp; Developer";
const bio1 =
  "Hi, I'm Krishna. A passionate Full-Stack React Developer";

  const handleDownload = () => {
    const pdfUrl = "https://drive.google.com/file/d/1AmfQZQrdOh0Hl6ztxrWTa8U99L9ajmBU/view?usp=drivesdk"; 
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "resume.pdf"; 
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
const tech_stack = [
  {
    icon: "https://skillicons.dev/icons?i=html",
  },
  {
    icon: "https://skillicons.dev/icons?i=css",
  },
  {
    icon: "https://skillicons.dev/icons?i=react",
  },
  {
    icon: "https://skillicons.dev/icons?i=js",
  },
  {
    icon: "https://skillicons.dev/icons?i=ts",
  },
  {
    icon: "https://skillicons.dev/icons?i=next",
  },
];


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#f9f9f9"
    id="landing-section"
  >
    <VStack spacing={4} alignItems="center" color="black">
      <Flex
        justifyContent="space-between"
        width="100%"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Box textAlign={useBreakpointValue({ base: "center", md: "left" })}>
          <Heading
            as="h1"
            size={{ md: "4xl", base: "2xl" }}
            color="#2D2E32"
            marginX={{ md: "110", base: "30" }}
            marginY="5"
            paddingY={{ md: "5", base: "2" }}
            dangerouslySetInnerHTML={{ __html: greeting }}
          ></Heading>

          <Heading
            as="h2"
            size="md"
            fontWeight="500"
            fontFamily="Mulish, sans-serif"
            color="#555555"
            marginX={{ md: "115", base: "5" }}
            marginY={{ md: "5", base: "2" }}
            dangerouslySetInnerHTML={{ __html: useBreakpointValue({ base: bio1 + " based in Tamil Nadu, India.", md: bio1 + "<br> based in Tamil Nadu, India." }) }}
          ></Heading>
        </Box>
        <Box>
          <Avatar
            boxSize={{ md: "300px", base: "250px" }}
            src={pfp}
            marginRight={{ md: "150px", base: "0" }}
            marginTop={{ md: "30", base: "20" }}
            marginLeft={{ md: "0", base: "135" }}
            alignSelf={{ base: "center" }}
          />
        </Box>
      </Flex>
      <Button
      backgroundColor="#67A0CF"  
      color="white"
      _hover={{
        backgroundColor: "#67AF", 
      }}
      alignSelf={{base:"center", md:"flex-start"}}
      width={{ md: "30rem",base:"10rem" }}
      height={{md:"3.5rem",base:"3.5rem"}}
      fontSize={{md:"2xl", base:"xl"}}
      marginLeft={{md:"7rem"}}
      textColor="#2D2E32"
      onClick={handleDownload}
    >
      Get Resume
    </Button>
      <Flex
        justifyContent="space-between"
        width="57%"
        direction={{ base: "column", md: "row" }}
        marginTop={{md:"10"}}
      >
        <Heading
          as="h3"
          size={{ md: "2xl", base: "lg" }}
          color="#2D2E32"
          paddingTop={{ md: "100", base: "15" }}
          paddingRight={{ md: "0", base: "0" }}
          alignSelf={{ base: "center", md:"left" }}
        >
          Tech Stack
        </Heading>
        <div className="line" />
        <HStack
          spacing={8}
          paddingTop={{ md: "110", base: "30" }}
          className="icon-hover"
          alignSelf={{base:"center"}}
          paddingLeft={{md:"0", base:"0"}}
          marginRight={{md:"0", base:"60"}}
        >
          {tech_stack.map((tech, index) => (
            <Image
            className = "icon"
            key={index}
            src={tech.icon}
            alt={`Tech Icon ${index}`}
            boxSize={10}
          />
          ))}
        </HStack>
      </Flex>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

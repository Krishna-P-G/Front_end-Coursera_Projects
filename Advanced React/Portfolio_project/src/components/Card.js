import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = ({ title, description, imageSrc, gitHubUrl }) => {
  return (
    <VStack
      align="flex-start"
      spacing={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      w="100%"
      maxW="sm"
      bg="white"
      className="card_each"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack align="flex-start" spacing={2} w="100%">
        <Heading as="h3" fontSize="xl" color="#2D3E32">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack className="see_more" alignSelf="flex-end" >
        <Heading as="h3" fontSize="xl" color="#2D3E32">
          See more
        </Heading>
        <a href={gitHubUrl} >
          <FontAwesomeIcon icon={faArrowRight} size="2x" color="#2D3E32" />
        </a>
      </HStack>
    </VStack>
  );
};

export default Card;

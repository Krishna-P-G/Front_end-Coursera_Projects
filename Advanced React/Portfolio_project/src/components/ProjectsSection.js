import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box, Heading } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const projects = [
    {
      title: "Anime Madness",
      description:
        "An infinitely Scrollable Anime Vault which contains thousands of anime, built with NEXTJS and framer-motion",
      getImageSrc: () => require("../images/photo1.jpg"),
      gitHubUrl: "https://github.com/Krishna-P-G/Anime-Madness",
      iconSrcs: [
        "https://skillicons.dev/icons?i=next",
        "https://skillicons.dev/icons?i=ts",
        "https://skillicons.dev/icons?i=js",
        "https://skillicons.dev/icons?i=tailwind",
      ],
    },
    {
      title: "Flashy Languages",
      description:
        "A game of flashcards that allows us to learn different languages, implemented using Python Tkinter",
      getImageSrc: () => require("../images/photo2.jpg"),
      gitHubUrl: "https://github.com/Krishna-P-G/Flashy-Languages",
      iconSrcs: [
        "https://skillicons.dev/icons?i=py",
        "https://skillicons.dev/icons?i=selenium",
      ],

    },
    {
      title: "Cloud Discovery",
      description:
        "A Content discovery app built using React, RestAPI, MySQL. Users can upload photos, view others photos and like posts.",
      getImageSrc: () => require("../images/photo3.jpg"),
      gitHubUrl: "https://github.com/Krishna-P-G/Content-discovery-app",
      iconSrcs: [
        "https://skillicons.dev/icons?i=react",
        "https://skillicons.dev/icons?i=js",
        "https://skillicons.dev/icons?i=spring",
        "https://skillicons.dev/icons?i=mysql",
      ],
    },
    {
      title: "Amazon Tracky",
      description:
        "A simple python application built to directly alert users if their favourite amazon product is available at their desired price.",
      getImageSrc: () => require("../images/photo4.jpg"),
      gitHubUrl: "https://github.com/Krishna-P-G/Coursera_Calculator",
      iconSrcs: [
        "https://skillicons.dev/icons?i=py",
        "https://skillicons.dev/icons?i=selenium",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const nextSlide = (currentSlide + 1) % projects.length;
        setCurrentSlide(nextSlide);
        sliderRef.current.slickGoTo(nextSlide);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide, projects]);

  const settings = {
    ref: sliderRef,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Box
      backgroundColor="#f9f9f9"
      p={20}
      display="block"
      justifyContent="center"
      alignSelf="center"
      spacing={8}
      id="projects-section"
      paddingTop={40}
    >
      <Heading
        as="h1"
        size={{md:"4xl", base:"2xl"}}
        color="#2D2E32"
        display="flex"
        justifyContent="center"
        alignSelf="center"
        paddingBottom="20"
      >
        Featured Projects
      </Heading>
      <Box display="block" justifyContent="center" alignItems="center">
        <Slider display="block"  {...settings}>
          {projects.map((project, index) => (
            <Box
              key={project.title}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              marginLeft={{md:"1rem", base:"0"}}
              paddingBottom="10"
            >
              <Card
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
                gitHubUrl={project.gitHubUrl}
                iconSrcs={project.iconSrcs}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProjectsSection;

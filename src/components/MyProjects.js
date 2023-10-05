import React from 'react'
import { motion } from 'framer-motion';

import{
    PaddingContainer,
    Heading,
    BlueText
} from '../styles/Global.styled';

import { projectDetails } from '../utils/Data';
import Project from './layouts/Project';
import { fadeInTopVarient } from '../utils/Varients';

const MyProjects = () => {
  return (
    <PaddingContainer
        id='projects'
        top="5%"
        bottom='5%'
        responsiveTop="20%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
    >
        <Heading 
            as={motion.h4}
            variants={fadeInTopVarient}
            initial="hidden"
            whileInView="visible"
            size="h4">
            MY PROJECTS
        </Heading>

        <Heading 
            as={motion.h4}
            variants={fadeInTopVarient}
            initial="hidden"
            whileInView="visible" 
            size="h2">
            What <BlueText>I have built?</BlueText>
        </Heading>

        {projectDetails.map((project) => (
            <PaddingContainer key={project.id} top="5rem" bottom="5rem">
                <Project data={project} />
            </PaddingContainer>
        ))}

    </PaddingContainer>
  )
}

export default MyProjects;
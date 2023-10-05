import React from 'react'
import { motion } from 'framer-motion';
 
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

import { ShowcaseImageCard, ShowcaseParticleContainer, Particle } from '../styles/Showcase.styled'; 

import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'; 
import { fadeInLeftVarient, fadeInRightVarient } from '../utils/Varients';

import ShowCaseImg from '../assets/sid.jpeg';
import BackgroundImg from'../assets/particle.png';
function Showcase () {
    const linkedinURL = 'https://www.linkedin.com/in/siddhesh-thakarkar-132660237';
    const gitHub = 'https://github.com/Siddhesh071103';
    const youTube = 'https://youtube.com/@Sidcric?si=k6Lc8CgiEWvmY-rJ';
  return (
   <PaddingContainer
        id="Home"
        left="3%"
        right="10%"
        top="18%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="8rem"
        >
        <FlexContainer align= "left" fullWidthChild>
            {/*--left-content--*/}
            <motion.div
                variants={fadeInLeftVarient}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as= "h4" size="h4">Hello!</Heading>

                <Heading
                    as="h2"
                    size="h2"
                    top="0.5rem"
                    bottom="1rem"
                >
                    I'm <BlueText>Siddhesh Thakarkar</BlueText>
                </Heading>

                <Heading as="h3" size="h3">
                    I'm a <BlueText>Frontend Developer</BlueText>
                </Heading>

                <ParaText as="p" top="2rem" bottom="4rem">
                    Hello, my name is Siddhesh Thakarkar and I'm a front-end developer with a new beginning in creating and designing user-friendly websites and web applications.
                </ParaText>

                <FlexContainer gap="20px" responsiveFlex>
                    <IconContainer size="1.5rem">
                        <a href={linkedinURL} target='_blank' rel='noopener noreferrer'>
                        <BsLinkedin color='white'/>
                        </a>
                    </IconContainer>

                    <IconContainer size="1.5rem">
                    <a href={gitHub} target='_blank' rel='noopener noreferrer'>
                        <BsGithub color='white'/>
                    </a>
                    </IconContainer>

                    <IconContainer size="1.5rem">
                    <a href={youTube} target='_blank' rel='noopener noreferrer'>
                        <BsYoutube color='white'/>
                    </a>
                    </IconContainer>
                </FlexContainer>
            </motion.div>

            <FlexContainer 
                as={motion.div}
                variants={fadeInRightVarient}
                initial="hidden"
                whileInView="visible"
                justify="flex-end">
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src={ShowCaseImg} alt='showcase' width="350" height="350"/>
                    </ShowcaseImageCard>

                    <Particle
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.5, 1]
                        }}

                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt='particle'
                        top="-80px"
                        left="20px"
                        rotate="60deg"
                    />

                    <Particle
                    as={motion.img}
                        animate={{
                            y: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.8, 1]
                        }}

                        transition={{
                            duration: 18,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt='particle'
                        top="50px"
                        right="-70px"
                        rotate="0deg"
                    />

                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, -100, 0],
                            rotate: 360,
                            scale: [1, 0.9, 1]
                        }}

                        transition={{
                            duration: 15,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt='particle'
                        bottom="10px"
                        left="-70px"
                        rotate="50deg"
                    />
                </ShowcaseParticleContainer>
            </FlexContainer>

        </FlexContainer>

   </PaddingContainer>
  )
}

export default Showcase;
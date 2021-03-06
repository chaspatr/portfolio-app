import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  List,
  ListItem,
  Link,
  //SimpleGrid,
  Icon,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
//import { GridItem } from "../components/grid-item";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          align="center"
        >
          Hello, I am a junior software devloper!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Chase Patrick
            </Heading>
            <p>Digital Problem Solver ( Developer / Engineer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/Chase.JPG"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            My name is Chase and I am a Software Developer/Engineer based in
            Indianapolis with a passion for problem solving and building
            solutions. Thanks to the opportunity with Kenzie Academy, I was able
            to build my my knowledge in web developement. My current role with
            Circle K that allows me to elevate my development to full-stack with
            .Net development. My goal is to take this experience, along with my
            adaptability and problem-solving skills, to grow my career. My most
            recent project is{" "}
            <NextLink href="/works/nextfire">
              <Link>NextFire</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Bloomington, IN
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked at Amazon.com as a Tier 2 Logistics Associate
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Associate Front-end Developement training program at
            Kenzie Academy and began further self-taught education
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Began working at CircleK (Contracted through Beacon Hill) as a
            Junior Full-Stack Software Developer
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Hired on as a full-time employee at CircleK as a Junior Full-Stack
            Software Developer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>
          <Paragraph>
            Software Developement, Video Games, Music, Animation, Learning about
            New Technology
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ChasePatrickDev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @ChasePatrickDev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/ChasePatrickDev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @ChasePatrickDev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://linkedin.com/in/chase-patrick-"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @ChasePatrick
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
}

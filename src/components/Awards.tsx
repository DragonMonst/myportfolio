import { Box, Heading, Text, SimpleGrid, Badge, Image, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import saLogo from '../assets/sa.png'
import nusLogo from '../assets/nus.svg'

function Awards() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const awards = [
    {
      title: 'Bronze Medal',
      organization: 'Romanian Master of Informatics',
      year: '2025',
      description: 'Represented Vietnam in a two-day international competitive programming contest hosted by Romania for their 2026 International Olympiad in Informatics’ national representative selection process.',
      logo: saLogo,
      icon: '⭐',
    },
    {
      title: 'Bronze Medal (High School Division)',
      organization: 'ICPC Asia Ho Chi Minh City Regional',
      year: '2025',
      description: 'Participated in a 5-hour regional ICPC competitive programming contest. Solved 6 of 13 problems as a team of three, independently solving 3 problems. Ranked 16th out of 59 participating teams.',
      logo: nusLogo,
      icon: '🎓',
    },
    {
      title: 'Gold Medal (High School Division)',
      organization: 'ICPC Vietnam National',
      year: '2025',
      description: 'Competed in a 5-hour national programming contest as part of a team selection process for the ICPC Asia Ho Chi Minh City Regional contest. Solved 10 out of 12 problems as a team of three, independently solving 4 problems. Ranked 2nd out of 100+ high school teams and 4th out of 500+ total participating teams, including those from universities.',
      logo: nusLogo,
      icon: '⭐',
    },
    {
      title: 'Honorable Mention',
      organization: 'Vietnam Olympiad in Informatics',
      year: '2024',
      description: 'Selected as one of ten representatives for the school’s team in the national Informatics competition for all high school students across Vietnam. Ranked 321st out of over 800 selected competitors for individual performance.',
      logo: nusLogo,
      icon: '⭐',
    },
    {
      title: 'Gold Medal',
      organization: 'HSGS Olympiad',
      year: '2024',
      description: 'Represented the school in the national Informatics Olympiad for gifted high school students and won a Gold Medal for individual performance.',
      logo: nusLogo,
      icon: '⭐',
    },
    {
      title: 'Third Prize',
      organization: 'Vietnam National University Highschool Olympiad',
      year: '2023',
      description: 'Won Third Prize for individual performance in a nationwide Informatics competition for high school students.',
      logo: nusLogo,
      icon: '⭐',
    },
    {
      title: 'Bronze Medals (2×)',
      organization: 'Northern Delta & Coastal Region Contest',
      year: '2023 & 2024',
      description: 'Competed in a regional programming contest for both years as one of three school representatives. Earned two Bronze Medals for individual performance.',
      logo: nusLogo,
      icon: '⭐',
    },
    {
      title: 'Second Prize (2x)',
      organization: 'Hanoi National University of Education Highschool Olympiad',
      year: '2023 & 2024',
      description: 'Awarded Second Prize twice for individual performance in a school-wide competition in Informatics.',
      logo: nusLogo,
      icon: '⭐',
    },
    {
      title: 'Second Place (16-18 age bracket)',
      organization: 'Cau Giay Ward’s Chess Tournament',
      year: '2024',
      description: 'Participated in the chess tournament for local youth and claimed Second Place in the 16-18 age group.',
      logo: nusLogo,
      icon: '⭐',
    },
  ]

  return (
    <Box
      id="awards"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      py={{ base: 16, md: 24 }}
      px={0}
      position="relative"
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} maxW="1200px" mx="auto">
        <VStack gap={3} mb={12} textAlign="center">
          <Box
            as="span"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight={700}
            color="purple.600"
            textTransform="uppercase"
            letterSpacing="wide"
            px={6}
            py={3}
            bg="white"
            borderRadius="full"
            boxShadow="md"
          >
            Awards & Achievements
          </Box>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight={800}
            textAlign="center"
            lineHeight="shorter"
            bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
            bgClip="text"
            letterSpacing="tight"
          >
            Awards & Achievements
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {awards.map((award, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                p={8}
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="gray.100"
                textAlign="center"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                  borderColor: 'purple.200',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Box
                  w="90px"
                  h="90px"
                  borderRadius="full"
                  bg="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={6}
                  boxShadow="0 8px 24px rgba(102, 126, 234, 0.3)"
                  border="3px solid"
                  borderColor="purple.100"
                  p={3}
                  position="relative"
                  overflow="hidden"
                >
                  <Image
                    src={award.logo}
                    alt={`${award.organization} logo`}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                  />
                </Box>
                <Heading as="h3" fontSize="lg" mb={3} color="gray.900" fontWeight={700}>
                  {award.title}
                </Heading>
                <Text fontSize="md" color="purple.700" fontWeight={600} mb={3}>
                  {award.organization}
                </Text>
                <Badge
                  bgGradient="linear(135deg, #667eea, #764ba2)"
                  color="blue"
                  backgroundColor="gray.100"
                  mb={4}
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight={600}
                >
                  {award.year}
                </Badge>
                <Text color="gray.800" lineHeight="tall" fontSize="sm" fontWeight={500}>
                  {award.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Scroll Arrow */}
          <Box
            position="absolute"
            bottom={8}
            left="50%"
            transform="translateX(-50%)"
            color="purple.600"
            _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
            cursor="pointer"
            onClick={() => scrollToSection('projects')}
            transition="all 0.3s"
            zIndex={2}
            display={{ base: 'none', md: 'block' }}
          >
            <HiArrowDown size={32} />
          </Box>
      </Box>
    </Box>
  )
}

export default Awards


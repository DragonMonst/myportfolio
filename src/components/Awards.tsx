import { Box, Heading, Text, SimpleGrid, Badge, VStack, Icon } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { 
  FaMedal, 
  FaTrophy, 
  FaCertificate, 
  FaChess
} from 'react-icons/fa'
import { 
  GiTrophyCup, 
  GiLaurelCrown, 
  GiMedalSkull
} from 'react-icons/gi'
import { 
  MdEmojiEvents,
  MdWorkspacePremium
} from 'react-icons/md'

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
      description: 'Represented Vietnam in a two-day international competitive programming contest hosted by Romania for their 2026 International Olympiad in Informatics\' national representative selection process.',
      icon: FaMedal,
      iconColor: 'orange.500',
      bgGradient: 'linear(135deg, #f59e0b 0%, #d97706 100%)',
      borderColor: 'orange.300',
      category: 'International',
      bgColor: 'orange.50',
      yearColor: 'orange.600',
      yearBg: 'orange.100',
    },
    {
      title: 'Bronze Medal',
      organization: 'ICPC Asia Ho Chi Minh City Regional',
      year: '2025',
      description: 'Participated in a 5-hour regional ICPC competitive programming contest. Solved 6 of 13 problems as a team of three, independently solving 3 problems. Ranked 16th out of 59 participating teams.',
      icon: GiTrophyCup,
      iconColor: 'orange.500',
      bgGradient: 'linear(135deg, #f59e0b 0%, #d97706 100%)',
      borderColor: 'orange.300',
      category: 'Regional',
      bgColor: 'blue.50',
      yearColor: 'blue.600',
      yearBg: 'blue.100',
    },
    {
      title: 'Gold Medal',
      organization: 'ICPC Vietnam National',
      year: '2025',
      description: 'Competed in a 5-hour national programming contest as part of a team selection process for the ICPC Asia Ho Chi Minh City Regional contest. Solved 10 out of 12 problems as a team of three, independently solving 4 problems. Ranked 2nd out of 100+ high school teams.',
      icon: GiLaurelCrown,
      iconColor: 'yellow.400',
      bgGradient: 'linear(135deg, #fbbf24 0%, #f59e0b 100%)',
      borderColor: 'yellow.300',
      category: 'National',
      bgColor: 'amber.50',
      yearColor: 'yellow.700',
      yearBg: 'yellow.100',
    },
    {
      title: 'Honorable Mention',
      organization: 'Vietnam Olympiad in Informatics',
      year: '2024',
      description: 'Selected as one of ten representatives for the school\'s team in the national Informatics competition for all high school students across Vietnam. Ranked 321st out of over 800 selected competitors for individual performance.',
      icon: FaCertificate,
      iconColor: 'purple.500',
      bgGradient: 'linear(135deg, #8b5cf6 0%, #7c3aed 100%)',
      borderColor: 'purple.300',
      category: 'National',
      bgColor: 'violet.50',
      yearColor: 'purple.600',
      yearBg: 'purple.100',
    },
    {
      title: 'Gold Medal',
      organization: 'HSGS Olympiad',
      year: '2024',
      description: 'Represented the school in the national Informatics Olympiad for gifted high school students and won a Gold Medal for individual performance.',
      icon: MdEmojiEvents,
      iconColor: 'yellow.400',
      bgGradient: 'linear(135deg, #fbbf24 0%, #f59e0b 100%)',
      borderColor: 'yellow.300',
      category: 'National',
      bgColor: 'sky.50',
      yearColor: 'cyan.600',
      yearBg: 'cyan.100',
    },
    {
      title: 'Third Prize',
      organization: 'Vietnam National University Highschool Olympiad',
      year: '2023',
      description: 'Won Third Prize for individual performance in a nationwide Informatics competition for high school students.',
      icon: FaTrophy,
      iconColor: 'orange.400',
      bgGradient: 'linear(135deg, #fb923c 0%, #f97316 100%)',
      borderColor: 'orange.300',
      category: 'National',
      bgColor: 'rose.50',
      yearColor: 'pink.600',
      yearBg: 'pink.100',
    },
    {
      title: 'Bronze Medals (2×)',
      organization: 'Northern Delta & Coastal Region Contest',
      year: '2023 & 2024',
      description: 'Competed in a regional programming contest for both years as one of three school representatives. Earned two Bronze Medals for individual performance.',
      icon: GiMedalSkull,
      iconColor: 'orange.500',
      bgGradient: 'linear(135deg, #f59e0b 0%, #d97706 100%)',
      borderColor: 'orange.300',
      category: 'Regional',
      bgColor: 'teal.50',
      yearColor: 'teal.600',
      yearBg: 'teal.100',
    },
    {
      title: 'Second Prize (2x)',
      organization: 'Hanoi National University of Education Highschool Olympiad',
      year: '2023 & 2024',
      description: 'Awarded Second Prize twice for individual performance in a school-wide competition in Informatics.',
      icon: MdWorkspacePremium,
      iconColor: 'blue.500',
      bgGradient: 'linear(135deg, #3b82f6 0%, #2563eb 100%)',
      borderColor: 'blue.300',
      category: 'University',
      bgColor: 'indigo.50',
      yearColor: 'indigo.600',
      yearBg: 'indigo.100',
    },
    {
      title: 'Second Place',
      organization: 'Cau Giay Ward\'s Chess Tournament',
      year: '2024',
      description: 'Participated in the chess tournament for local youth and claimed Second Place in the 16-18 age group.',
      icon: FaChess,
      iconColor: 'green.500',
      bgGradient: 'linear(135deg, #10b981 0%, #059669 100%)',
      borderColor: 'green.300',
      category: 'Local',
      bgColor: 'green.50',
      yearColor: 'green.600',
      yearBg: 'green.100',
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
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {awards.map((award, index) => {
              // Split description by periods and filter out empty strings
              const descriptionItems = award.description
                .split('.')
                .map(item => item.trim())
                .filter(item => item.length > 0)
              
              return (
              <Box
                key={index}
                bg={award.bgColor}
                borderRadius="2xl"
                p={8}
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="2px solid"
                borderColor={award.borderColor}
                textAlign="center"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: 'translateY(-12px) scale(1.02)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  borderColor: award.iconColor,
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                {/* Decorative gradient background */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient={award.bgGradient}
                  opacity={0.8}
                />
                
                {/* Icon container with animated background */}
                <Box
                  w="100px"
                  h="100px"
                  borderRadius="full"
                  bgGradient={award.bgGradient}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={6}
                  boxShadow="0 8px 32px rgba(0, 0, 0, 0.12)"
                  position="relative"
                  _hover={{
                    transform: 'rotate(5deg) scale(1.1)',
                    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.2)',
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <Box
                    w="80px"
                    h="80px"
                    borderRadius="full"
                    bg="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                  >
                    <Icon
                      as={award.icon}
                      w={10}
                      h={10}
                      color={award.iconColor}
                    />
                  </Box>
                </Box>

                {/* Category badge */}
                <Badge
                  bg={award.iconColor}
                  color="white"
                  mb={3}
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight={700}
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  {award.category}
                </Badge>

                <Heading 
                  as="h3" 
                  fontSize="xl" 
                  mb={3} 
                  color="gray.900" 
                  fontWeight={800}
                  lineHeight="shorter"
                >
                  {award.title}
                </Heading>
                
                <Text 
                  fontSize="md" 
                  color="purple.700" 
                  fontWeight={600} 
                  mb={4}
                  minH="3rem"
                >
                  {award.organization}
                </Text>
                
                <Box textAlign="center" mb={4}>
                  <Badge
                    bg={award.yearBg}
                    color={award.yearColor}
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontSize="md"
                    fontWeight={800}
                    boxShadow="md"
                    border="2px solid"
                    borderColor={award.yearColor}
                    textTransform="uppercase"
                    letterSpacing="wide"
                    display="inline-block"
                  >
                    {award.year}
                  </Badge>
                </Box>
                
                <VStack 
                  gap={2}
                  align="stretch"
                  textAlign="left"
                  color="gray.700"
                >
                  {descriptionItems.map((item, idx) => (
                    <Box
                      key={idx}
                      fontSize="sm"
                      fontWeight={500}
                      lineHeight="tall"
                      pl={4}
                      position="relative"
                      _before={{
                        content: '"•"',
                        position: 'absolute',
                        left: 0,
                        color: award.iconColor,
                        fontWeight: 'bold',
                        fontSize: 'lg',
                      }}
                    >
                      {item}.
                    </Box>
                  ))}
                </VStack>
              </Box>
            )})}
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


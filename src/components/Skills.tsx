import { Box, Heading, VStack, Flex, Text } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Skills() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const skills = [
    {
      name: 'C++',
      level: 90,
      color: 'blue',
      label: 'Advanced',
    },
    {
      name: 'Python',
      level: 60,
      color: 'yellow',
      label: 'Moderate',
    },
    {
      name: 'HTML',
      level: 35,
      color: 'green',
      label: 'Some Experience',
    },
    {
      name: 'CSS',
      level: 35,
      color: 'purple',
      label: 'Some Experience',
    },
    {
      name: 'JavaScript',
      level: 30,
      color: 'orange',
      label: 'Some Experience',
    },
  ]

  const getColorScheme = (color: string) => {
    const colorMap: { [key: string]: { gradient: string; bg: string; text: string; barBg: string } } = {
      blue: {
        gradient: 'linear(135deg, #3b82f6 0%, #2563eb 100%)',
        bg: 'blue.50',
        text: 'blue.700',
        barBg: 'blue.100',
      },
      yellow: {
        gradient: 'linear(135deg, #fbbf24 0%, #f59e0b 100%)',
        bg: 'yellow.50',
        text: 'yellow.700',
        barBg: 'yellow.100',
      },
      orange: {
        gradient: 'linear(135deg, #fb923c 0%, #f97316 100%)',
        bg: 'orange.50',
        text: 'orange.700',
        barBg: 'orange.100',
      },
      green: {
        gradient: 'linear(135deg, #10b981 0%, #059669 100%)',
        bg: 'green.50',
        text: 'green.700',
        barBg: 'green.100',
      },
      purple: {
        gradient: 'linear(135deg, #8b5cf6 0%, #7c3aed 100%)',
        bg: 'purple.50',
        text: 'purple.700',
        barBg: 'purple.100',
      },
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <Box
      id="skills"
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
            Technical Skills & Certifications
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
            Technical Skills & Certifications
          </Heading>
        </VStack>
        <Box maxW="900px" mx="auto">
          <Box
            bg="white"
            p={{ base: 8, md: 12 }}
            borderRadius="3xl"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
            border="2px solid"
            borderColor="purple.100"
            position="relative"
            overflow="hidden"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '0 16px 48px rgba(102, 126, 234, 0.2)',
              borderColor: 'purple.300',
            }}
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          >
            {/* Decorative gradient background */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="6px"
              bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
            />
            
            <VStack align="stretch" gap={8}>
              <Heading
                as="h3"
                fontSize={{ base: 'xl', md: '2xl' }}
                color="gray.900"
                fontWeight={800}
                textAlign="center"
              >
                Programming Languages
              </Heading>
              
              <VStack align="stretch" gap={8}>
                {skills.map((skill, index) => {
                  const colorScheme = getColorScheme(skill.color)
                  return (
                    <Box 
                      key={index}
                      p={6}
                      bg="gray.50"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <Flex justify="space-between" align="center" mb={4}>
                        <Flex align="center" gap={4}>
                          <Box
                            w="150px"
                            h="50px"
                            borderRadius="lg"
                            bgGradient={colorScheme.gradient}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
                            flexShrink={0}
                          >
                            <Text
                              fontSize="xl"
                              fontWeight={800}
                              color={colorScheme.text}
                              fontFamily="monospace"
                            >
                              {skill.name}
                            </Text>
                          </Box>
                          <VStack align="flex-start" gap={1}>
                            <Box
                              bg={colorScheme.bg}
                              color={colorScheme.text}
                              px={3}
                              py={1}
                              borderRadius="full"
                              fontSize="xs"
                              fontWeight={700}
                              textTransform="uppercase"
                              letterSpacing="wide"
                            >
                              {skill.label}
                            </Box>
                          </VStack>
                        </Flex>
                        <Box
                          bg={colorScheme.bg}
                          color={colorScheme.text}
                          px={5}
                          py={2}
                          borderRadius="xl"
                          fontSize={{ base: 'xl', md: '2xl' }}
                          fontWeight={900}
                          border="2px solid"
                          borderColor={colorScheme.text}
                          minW="80px"
                          textAlign="center"
                        >
                          {skill.level}%
                        </Box>
                      </Flex>
                      
                      {/* Progress Bar with Grid Markers */}
                      <Box position="relative" h="28px" mt={2}>
                        {/* Grid markers */}
                        <Flex position="absolute" w="100%" h="100%" justify="space-between" align="center" px={1}>
                          {[0, 25, 50, 75, 100].map((marker) => (
                            <Box
                              key={marker}
                              w="2px"
                              h="100%"
                              bg={marker === 0 || marker === 100 ? colorScheme.barBg : 'gray.300'}
                              opacity={0.5}
                            />
                          ))}
                        </Flex>
                        
                        {/* Progress Bar Container */}
                        <Box
                          w="100%"
                          h="100%"
                          bg={colorScheme.barBg}
                          borderRadius="full"
                          overflow="visible"
                          position="relative"
                          border="3px solid"
                          borderColor={colorScheme.barBg}
                          boxShadow="inset 0 2px 4px rgba(0, 0, 0, 0.1)"
                        >
                          <Box
                            position="absolute"
                            top="50%"
                            left={`${skill.level}%`}
                            transform="translate(-50%, -50%)"
                            w="32px"
                            h="32px"
                            borderRadius="full"
                            bgGradient={colorScheme.gradient}
                            border="4px solid"
                            borderColor="white"
                            boxShadow="0 4px 16px rgba(0, 0, 0, 0.4)"
                            transition="left 1s ease-in-out"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Box
                              w="12px"
                              h="12px"
                              borderRadius="full"
                              bg="white"
                              boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
                            />
                          </Box>
                        </Box>
                        
                        {/* Scale Labels */}
                        <Flex justify="space-between" mt={1} px={1}>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>0%</Text>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>25%</Text>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>50%</Text>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>75%</Text>
                          <Text fontSize="xs" color="gray.500" fontWeight={600}>100%</Text>
                        </Flex>
                      </Box>
                    </Box>
                  )
                })}
              </VStack>
            </VStack>
          </Box>
        </Box>

        {/* Scroll Arrow - Optional, can scroll to contact or top */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="purple.600"
          _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('contact')}
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

export default Skills


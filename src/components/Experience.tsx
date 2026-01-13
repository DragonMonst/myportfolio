import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Experience() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'MienBac Education JSC',
      period: 'Jul 2025 - Aug 2025',
      description: [
        'Worked as a software engineer intern for the IT department to enhance and support daily operations in an educational center for young students.',
        'Revamped the inventory management system to fully automate the process of tracking inventory items which was used by more than 200 internal employees.',
        'Implemented a string matching search engine and an automated item’s identifier generation algorithm to replace manual scrolling and input time by 40% per internal user.'
      ]
    }
  ]

  return (
    <Box
      id="experience"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
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
            Professional Experience
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
            Professional Experience
          </Heading>
        </VStack>
        <Box maxW="1000px" mx="auto">
          {experiences.map((exp, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={{ base: 10, md: 14 }}
              boxShadow="0 10px 40px rgba(0, 0, 0, 0.12)"
              border="3px solid"
              borderColor="gray.200"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                borderColor: 'purple.300',
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              {/* Professional left border accent */}
              <Box
                position="absolute"
                top={0}
                left={0}
                bottom={0}
                w="6px"
                bgGradient="linear(180deg, #667eea 0%, #764ba2 100%)"
              />
              
              <VStack align="stretch" gap={8}>
                {/* Header Section - Professional Layout */}
                <Flex 
                  direction={{ base: 'column', md: 'row' }} 
                  justify="space-between" 
                  align={{ base: 'flex-start', md: 'flex-start' }}
                  gap={4}
                  pb={6}
                  borderBottom="2px solid"
                  borderColor="gray.200"
                >
                  <VStack align={{ base: 'flex-start', md: 'flex-start' }} gap={2} flex={1}>
                    <Heading 
                      as="h3" 
                      fontSize={{ base: '2xl', md: '3xl' }} 
                      color="gray.900" 
                      fontWeight={800}
                      lineHeight="shorter"
                    >
                      {exp.title}
                    </Heading>
                    <Text 
                      fontSize={{ base: 'lg', md: 'xl' }} 
                      color="purple.700" 
                      fontWeight={700}
                    >
                      {exp.company}
                    </Text>
                  </VStack>
                  <Box
                    bg="purple.50"
                    color="purple.700"
                    px={6}
                    py={2.5}
                    borderRadius="lg"
                    fontWeight={700}
                    fontSize={{ base: 'sm', md: 'md' }}
                    boxShadow="0 2px 8px rgba(102, 126, 234, 0.15)"
                    border="2px solid"
                    borderColor="purple.200"
                    whiteSpace="nowrap"
                    flexShrink={0}
                  >
                    {exp.period}
                  </Box>
                </Flex>

                {/* Description Section - Professional Bullets */}
                {exp.description && exp.description.length > 0 && (
                  <VStack align="stretch" gap={5}>
                    {exp.description.map((item, i) => (
                      <Flex 
                        key={i}
                        align="flex-start" 
                        gap={4}
                      >
                        <Box
                          w="32px"
                          h="32px"
                          borderRadius="md"
                          bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          color="green"
                          fontWeight="bold"
                          fontSize="lg"
                          mt={0.5}
                          boxShadow="0 2px 8px rgba(102, 126, 234, 0.3)"
                        >
                          ✓
                        </Box>
                        <Text 
                          flex={1}
                          color="gray.700" 
                          fontWeight={500}
                          fontSize={{ base: 'md', md: 'lg' }}
                          lineHeight="tall"
                        >
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
                )}
              </VStack>
            </Box>
          ))}
        </Box>

        {/* Scroll Arrow */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="purple.600"
          _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('awards')}
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

export default Experience


import { Box, Container, Heading, Text, Button, Flex, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      id="home"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      pt={{ base: "80px", md: "88px" }}
      pb={20}
      css={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      {/* Animated code brackets */}
      {['{', '}', '[', ']', '(', ')', '<', '>'].map((char, i) => (
        <Text
          key={i}
          position="absolute"
          fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
          fontWeight={900}
          color="white"
          opacity={0.05 + (i % 3) * 0.03}
          top={`${15 + i * 10}%`}
          left={`${5 + i * 12}%`}
          fontFamily="monospace"
          css={{
            animation: `floatCode ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
            '@keyframes floatCode': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-30px) rotate(5deg)' },
            },
          }}
        >
          {char}
        </Text>
      ))}

      {/* Animated code snippets */}
      {['const', 'function', 'return', 'import', 'export', 'async', 'await'].map((keyword, i) => (
        <Text
          key={i}
          position="absolute"
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight={600}
          color="white"
          opacity={0.08}
          top={`${20 + i * 12}%`}
          right={`${5 + i * 8}%`}
          fontFamily="monospace"
          css={{
            animation: `slideCode ${10 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 1.2}s`,
            '@keyframes slideCode': {
              '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
              '50%': { transform: 'translateX(-20px) translateY(-15px)' },
            },
          }}
        >
          {keyword}
        </Text>
      ))}

      {/* Animated grid pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        css={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
          '@keyframes gridMove': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(50px, 50px)' },
          },
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => {
        const size = 40 + i * 15
        const top = 10 + i * 11
        const left = 8 + i * 10
        const duration = 12 + i * 3
        
        return (
          <Box
            key={i}
            position="absolute"
            w={`${size}px`}
            h={`${size}px`}
            borderRadius={i % 2 === 0 ? 'full' : 'lg'}
            border="2px solid"
            borderColor="white"
            opacity={0.1 + (i % 3) * 0.05}
            top={`${top}%`}
            left={`${left}%`}
            css={{
              animation: `floatShape ${duration}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
              '@keyframes floatShape': {
                '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                '25%': { transform: 'translate(20px, -20px) rotate(90deg)' },
                '50%': { transform: 'translate(-15px, -30px) rotate(180deg)' },
                '75%': { transform: 'translate(-20px, 10px) rotate(270deg)' },
              },
            }}
          />
        )
      })}

      {/* Large animated background orbs */}
      <Box
        position="absolute"
        top="-40%"
        right="-40%"
        w="900px"
        h="900px"
        borderRadius="full"
        bgGradient="linear(135deg, #f093fb 0%, #f5576c 100%)"
        opacity={0.25}
        css={{
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />
      <Box
        position="absolute"
        bottom="-35%"
        left="-35%"
        w="800px"
        h="800px"
        borderRadius="full"
        bgGradient="linear(135deg, #4facfe 0%, #00f2fe 100%)"
        opacity={0.25}
        css={{
          animation: 'pulse 10s ease-in-out infinite',
          transform: 'scale(1.15)',
        }}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="600px"
        h="600px"
        borderRadius="full"
        bgGradient="linear(135deg, #43e97b 0%, #38f9d7 100%)"
        opacity={0.15}
        css={{
          animation: 'pulseCenter 12s ease-in-out infinite',
        }}
      />

      <Container maxW="1280px" position="relative" zIndex={10} px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 8, lg: 12 }}
        >
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            gap={6}
            flex={1}
          >
            <Box
              css={{
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="yellow.300"
                mb={2}
                fontWeight={600}
                letterSpacing="wide"
                opacity={0.95}
                css={{
                  animation: 'fadeIn 1.2s ease-out',
                }}
              >
                Hello, I'm
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                fontWeight={800}
                color="green.200"
                mb={4}
                lineHeight="shorter"
                textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
                css={{
                  animation: 'fadeInUp 1s ease-out 0.2s both',
                }}
              >
                Nguyen Thien Trung
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                fontWeight={600}
                color="orange.300"
                mb={6}
                opacity={0.95}
                css={{
                  animation: 'fadeInUp 1s ease-out 0.4s both',
                }}
              >
                Competitive Programmer, Chess Player & Football Fan
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                maxW="600px"
                lineHeight="tall"
                opacity={0.9}
                css={{
                  animation: 'fadeInUp 1s ease-out 0.6s both',
                }}
              >
                I am a high school Informatics student with a knack for competitive programming and chess.
              </Text>
            </Box>

            <Flex
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: 'full', sm: 'auto' }}
              css={{
                animation: 'fadeInUp 1s ease-out 0.8s both',
              }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                size={{ base: 'md', md: 'lg' }}
                bg="white"
                color="purple.700"
                fontWeight={600}
                px={8}
                boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  bg: 'gray.50',
                }}
                backgroundColor="gray.100"
                transition="all 0.3s"
                css={{
                  animation: 'buttonPulse 3s ease-in-out infinite',
                }}
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size={{ base: 'md', md: 'lg' }}
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="blue.600"
                fontWeight={600}
                px={8}
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
                _hover={{
                  bg: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-4px) scale(1.05)',
                  borderColor: 'white',
                }}
                backgroundColor="gray.100"
                transition="all 0.3s"
              >
                Get In Touch
              </Button>
            </Flex>

            <Flex
              gap={6}
              mt={4}
              css={{
                animation: 'fadeInUp 1s ease-out 1s both',
              }}
            >
              {/* <Link
                href="https://github.com/nhamhung"
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/quoc-hung-nham/"
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaLinkedin size={24} />
              </Link> */}
              {/* <Link
                href="mailto:nhamhung.gttn@gmail.com"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaEnvelope size={24} />
              </Link> */}
            </Flex>
          </VStack>

          {/* Developer-themed visual element */}
          <Box
            flex={1}
            display={{ base: 'none', lg: 'flex' }}
            justifyContent="center"
            alignItems="center"
            css={{
              animation: 'fadeInRight 1s ease-out 0.4s both',
            }}
          >
            <Box
              position="relative"
              w="500px"
              h="500px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* Animated terminal window */}
              <Box
                w="400px"
                h="300px"
                bg="rgba(0, 0, 0, 0.3)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                border="2px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                p={6}
                boxShadow="0 20px 60px rgba(0, 0, 0, 0.3)"
                css={{
                  animation: 'terminalPulse 4s ease-in-out infinite',
                  '@keyframes terminalPulse': {
                    '0%, 100%': { transform: 'scale(1)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)' },
                    '50%': { transform: 'scale(1.02)', boxShadow: '0 25px 70px rgba(102, 126, 234, 0.4)' },
                  },
                }}
              >
                <VStack align="flex-start" gap={3} color="white" fontFamily="monospace" fontSize="sm">
                  <Flex gap={2} mb={2}>
                    <Box w="12px" h="12px" borderRadius="full" bg="red.400" />
                    <Box w="12px" h="12px" borderRadius="full" bg="yellow.400" />
                    <Box w="12px" h="12px" borderRadius="full" bg="green.400" />
                  </Flex>
                  <Text opacity={0.8}>$ npm run portfolio</Text>
                  <Text 
                    opacity={0.6} 
                    css={{
                      animation: 'blink 1s infinite',
                      '@keyframes blink': {
                        '0%, 50%': { opacity: 0.6 },
                        '51%, 100%': { opacity: 0.2 },
                      },
                    }}
                  >
                    {'>'} Building your future...
                  </Text>
                  <Text 
                    opacity={0.6} 
                    css={{
                      animation: 'blink 1s infinite 0.5s',
                      '@keyframes blink': {
                        '0%, 50%': { opacity: 0.6 },
                        '51%, 100%': { opacity: 0.2 },
                      },
                    }}
                  >
                    {'>'} Compiling achievements...
                  </Text>
                  <Text 
                    opacity={0.6} 
                    css={{
                      animation: 'blink 1s infinite 1s',
                      '@keyframes blink': {
                        '0%, 50%': { opacity: 0.6 },
                        '51%, 100%': { opacity: 0.2 },
                      },
                    }}
                  >
                    {'>'} Ready to deploy!
                  </Text>
                </VStack>
              </Box>

              {/* Floating code elements around terminal */}
              {['</>', '{}', '[]', '()'].map((symbol, i) => (
                <Text
                  key={i}
                  position="absolute"
                  fontSize="3xl"
                  fontWeight={900}
                  color="white"
                  opacity={0.15}
                  fontFamily="monospace"
                  css={{
                    animation: `orbit ${8 + i * 2}s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
                    '@keyframes orbit': {
                      '0%': { transform: `rotate(${i * 90}deg) translateX(200px) rotate(${-i * 90}deg)` },
                      '100%': { transform: `rotate(${360 + i * 90}deg) translateX(200px) rotate(${-360 - i * 90}deg)` },
                    },
                  }}
                >
                  {symbol}
                </Text>
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>

      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="white"
        cursor="pointer"
        onClick={() => scrollToSection('about')}
        transition="all 0.3s"
        zIndex={10}
        display={{ base: 'none', md: 'block' }}
        css={{
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(-10px)' },
          },
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
        }}
        _hover={{
          color: 'white',
          transform: 'translateX(-50%) translateY(-5px)',
        }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default Hero


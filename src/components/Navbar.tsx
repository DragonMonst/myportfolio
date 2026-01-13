import { useState, useEffect } from 'react'
import { Box, Container, Flex, Link, IconButton, useDisclosure, Drawer, VStack, Text, Image } from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import profileImage from '../assets/Nguyen Thien Trung.png'

interface NavbarProps {
  activeSection?: string
}

function Navbar({ activeSection = 'home' }: NavbarProps) {
  const { open, onOpen, onClose } = useDisclosure()
  const [, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'awards', label: 'Awards' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(20px)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.08)"
      zIndex={1000}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      borderBottom="1px solid"
      borderColor="rgba(102, 126, 234, 0.1)"
      w="100%"
    >
      <Container maxW="1400px" px={{ base: 4, md: 8, lg: 12 }} w="100%">
        <Flex
          as="nav"
          justify="space-between"
          align="center"
          h={{ base: '70px', md: '80px' }}
        >
          {/* Logo - Enhanced */}
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            display="flex"
            alignItems="center"
            gap={3}
            _hover={{ transform: 'scale(1.05)' }}
            transition="transform 0.3s ease"
          >
            <Box
              w={{ base: '44px', md: '52px' }}
              h={{ base: '44px', md: '52px' }}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 8px 24px rgba(102, 126, 234, 0.3)"
              border="3px solid"
              borderColor="purple.200"
              bg="white"
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: 'xl',
                padding: '2px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            >
              <Image
                src={profileImage}
                alt="Profile"
                w="100%"
                h="100%"
                objectFit="contain"
              />
            </Box>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <Flex
            as="ul"
            listStyleType="none"
            gap={1}
            align="center"
            display={{ base: 'none', lg: 'flex' }}
            bg="gray.50"
            p={1}
            borderRadius="2xl"
            boxShadow="inset 0 2px 4px rgba(0, 0, 0, 0.06)"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Box as="li" key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                    px={5}
                    py={2.5}
                    borderRadius="xl"
                    fontSize="sm"
                    fontWeight={isActive ? 700 : 600}
                    color={isActive ? 'white' : 'gray.600'}
                    bg={isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent'}
                    position="relative"
                    _hover={{
                      color: isActive ? 'white' : '#667eea',
                      bg: isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: isActive ? '0 8px 20px rgba(102, 126, 234, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    boxShadow={isActive ? '0 4px 16px rgba(102, 126, 234, 0.3)' : 'none'}
                  >
                    {item.label}
                  </Link>
                </Box>
              )
            })}
          </Flex>

          {/* Mobile Menu Button - Enhanced */}
          <IconButton
            aria-label="Toggle menu"
            display={{ base: 'flex', lg: 'none' }}
            variant="ghost"
            onClick={open ? onClose : onOpen}
            color="gray.700"
            size="lg"
            borderRadius="xl"
            _hover={{
              bg: 'purple.50',
              color: '#667eea',
            }}
            transition="all 0.3s"
            bg="gray.50"
            boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </IconButton>
        </Flex>
      </Container>

      {/* Mobile Drawer - Enhanced */}
      <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="end">
        <Drawer.Backdrop bg="rgba(0, 0, 0, 0.5)" backdropFilter="blur(4px)" />
        <Drawer.Positioner>
          <Drawer.Content maxW="360px" bg="white" boxShadow="xl">
            <Drawer.Header
              borderBottom="1px solid"
              borderColor="gray.200"
              bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
              color="white"
              py={6}
            >
              <Flex justify="space-between" align="center">
                <VStack align="flex-start" spacing={0}>
                  <Text fontSize="xl" fontWeight={800} mr={1}>
                    Navigation
                  </Text>
                  <Text fontSize="xs" opacity={0.9} fontWeight={500}>
                    Select a section
                  </Text>
                </VStack>
                <IconButton
                  aria-label="Close menu"
                  variant="ghost"
                  onClick={onClose}
                  size="sm"
                  color="white"
                  _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <HiX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={6} px={4}>
              <VStack align="stretch" gap={2}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                      px={4}
                      py={3.5}
                      borderRadius="xl"
                      color={isActive ? 'white' : 'gray.700'}
                      fontWeight={isActive ? 700 : 600}
                      fontSize="md"
                      bg={isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'gray.50'}
                      transition="all 0.3s"
                      boxShadow={isActive ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none'}
                      _hover={{
                        color: isActive ? 'white' : '#667eea',
                        bg: isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                        boxShadow: isActive ? '0 6px 20px rgba(102, 126, 234, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                        transform: 'translateX(4px)',
                      }}
                    >
                      <Text>{item.label}</Text>
                    </Link>
                  )
                })}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}

export default Navbar

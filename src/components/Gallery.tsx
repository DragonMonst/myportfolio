import { useState } from 'react'
import { Box, Heading, SimpleGrid, Text, Dialog, VStack, Icon, Link, Flex } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaFilePdf } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import pdf1 from '../assets/Bronze Medals (2×) - Northern Delta & Coastal Region contest 2023-2024.pdf'
import pdf2 from '../assets/Gold Medal (High School Division) - ICPC Vietnam National 2025.pdf'
import pdf3 from '../assets/Gold Medal - HSGS Olympiad 2024.pdf'
import pdf4 from '../assets/Học sinh 3 tốt + Thanh niên khoẻ.pdf'
import pdf5 from '../assets/Honorable Mention - Vietnam Olympiad in Informatics 2024.pdf'
import pdf6 from '../assets/IELTS.pdf'
import pdf7 from '../assets/Second Prize (2x) - Hanoi National University of Education Highschool Olympiad 2023-2024.pdf'
import pdf8 from '../assets/Third Prize - Vietnam National University Highschool Olympiad 2023.pdf'
// To add image previews, import image files and add them to the imagePreview property
// Example: import preview1 from '../assets/preview1.jpg' and set imagePreview: preview1

function Gallery() {
  const { open, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const pdfs = [
    {
      id: 1,
      src: pdf1,
      title: 'Bronze Medals (2×)',
      description: 'Northern Delta & Coastal Region Contest 2023-2024',
      imagePreview: pdf1, // Use PDF first page as preview, or replace with actual image
    },
    {
      id: 2,
      src: pdf2,
      title: 'Gold Medal (High School Division)',
      description: 'ICPC Vietnam National 2025',
      imagePreview: pdf2,
    },
    {
      id: 3,
      src: pdf3,
      title: 'Gold Medal',
      description: 'HSGS Olympiad 2024',
      imagePreview: pdf3,
    },
    {
      id: 4,
      src: pdf4,
      title: 'Học sinh 3 tốt + Thanh niên khoẻ',
      description: 'Achievement Certificate',
      imagePreview: pdf4,
    },
    {
      id: 5,
      src: pdf5,
      title: 'Honorable Mention',
      description: 'Vietnam Olympiad in Informatics 2024',
      imagePreview: pdf5,
    },
    {
      id: 6,
      src: pdf6,
      title: 'IELTS',
      description: 'Overall Band Score: 8.0',
      imagePreview: pdf6,
    },
    {
      id: 7,
      src: pdf7,
      title: 'Second Prize (2x)',
      description: 'Hanoi National University of Education Highschool Olympiad 2023-2024',
      imagePreview: pdf7,
    },
    {
      id: 8,
      src: pdf8,
      title: 'Third Prize',
      description: 'Vietnam National University Highschool Olympiad 2023',
      imagePreview: pdf8,
    },
  ]

  const openModal = (pdf: any) => {
    setSelectedImage(pdf)
    onOpen()
  }

  return (
    <Box
      id="gallery"
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
            Certificates & Documents
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
            Certificates & Documents
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {pdfs.map((pdf) => (
            <Box
              key={pdf.id}
              cursor="pointer"
              onClick={() => openModal(pdf)}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
              bg="white"
              border="5px solid"
              borderColor="purple.300"
              _hover={{
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.3)',
                borderColor: 'purple.500',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
            >
              {/* PDF Preview with Image */}
              <Box
                h="220px"
                position="relative"
                overflow="hidden"
                bg="white"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
                  zIndex={2}
                />
                {/* PDF First Page Preview using iframe */}
                <Box
                  w="100%"
                  h="100%"
                  position="relative"
                  bg="gray.50"
                >
                  <iframe
                    src={`${pdf.imagePreview}#page=1&zoom=75&view=FitH`}
                    width="100%"
                    height="100%"
                    style={{
                      border: 'none',
                      pointerEvents: 'none',
                    }}
                    title={`${pdf.title} preview`}
                  />
                  {/* Overlay with PDF badge */}
                  <Box
                    position="absolute"
                    bottom={4}
                    right={4}
                    bg="red.500"
                    color="white"
                    px={3}
                    py={1.5}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight={700}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
                    zIndex={1}
                    backdropFilter="blur(4px)"
                  >
                    <Icon as={FaFilePdf} w={4} h={4} />
                    PDF
                  </Box>
                  {/* Gradient overlay for better badge visibility */}
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    h="50px"
                    bgGradient="linear(to top, rgba(255,255,255,0.8), transparent)"
                    pointerEvents="none"
                    zIndex={0}
                  />
                </Box>
              </Box>
              <Box p={5}>
                <Heading as="h3" fontSize="lg" mb={2} fontWeight={700} color="gray.900">
                  {pdf.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" lineHeight="tall" fontWeight={500}>
                  {pdf.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
        <Dialog.Backdrop bg="rgba(0, 0, 0, 0.7)" backdropFilter="blur(4px)" />
        <Dialog.Positioner>
          <Dialog.Content 
            maxW="95vw" 
            maxH="95vh" 
            w="1200px"
            bg="white"
            borderRadius="2xl"
            boxShadow="0 20px 60px rgba(0, 0, 0, 0.3)"
            overflow="hidden"
          >
            {selectedImage && (
              <Box>
                {/* Enhanced Header */}
                <Box
                  p={6}
                  borderBottom="2px solid"
                  borderColor="gray.200"
                  bgGradient="linear(135deg, #f7fafc 0%, #edf2f7 100%)"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="4px"
                    bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
                  />
                  <Flex justify="space-between" align="flex-start" gap={4}>
                    <VStack align="flex-start" gap={2} flex={1}>
                      <Heading as="h3" fontSize="2xl" color="gray.900" fontWeight={800}>
                        {selectedImage.title}
                      </Heading>
                      <Text color="gray.600" fontWeight={500} fontSize="md">
                        {selectedImage.description}
                      </Text>
                    </VStack>
                    <Link
                      href={selectedImage.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
                      color="white"
                      fontWeight={700}
                      fontSize="sm"
                      px={5}
                      py={2.5}
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      gap={2}
                      _hover={{ 
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                      }}
                      transition="all 0.3s"
                      boxShadow="0 4px 12px rgba(102, 126, 234, 0.3)"
                    >
                      Open PDF <FiExternalLink />
                    </Link>
                  </Flex>
                </Box>
                {/* Enhanced PDF Viewer */}
                <Box
                  h="calc(95vh - 180px)"
                  overflow="hidden"
                  bg="gray.900"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="gray.100"
                    p={6}
                    overflow="auto"
                  >
                    <Box
                      bg="white"
                      borderRadius="xl"
                      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
                      overflow="hidden"
                      maxW="100%"
                      mx="auto"
                    >
                      <iframe
                        src={`${selectedImage.src}#toolbar=1&navpanes=0&scrollbar=1`}
                        width="100%"
                        height="800px"
                        style={{
                          border: 'none',
                          display: 'block',
                        }}
                        title={selectedImage.title}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
            <Dialog.CloseTrigger 
              position="absolute"
              top={4}
              right={4}
              zIndex={10}
            />
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>

      {/* Scroll Arrow */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="purple.600"
        _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
        cursor="pointer"
        onClick={() => scrollToSection('skills')}
        transition="all 0.3s"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default Gallery


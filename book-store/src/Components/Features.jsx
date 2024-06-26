import { Box, Divider, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import FlexibleGrid from "../assets/flexibleGrid.svg"
import StyleGuide from "../assets/styleGrid.svg"
import Spacing from "../assets/spacing.svg"
import Responsive from "../assets/responsive.svg.svg"

export const Features = () => {
  let data = [
    {
      image: FlexibleGrid,
      heading: "Flexible Grid",
      description: "Change grid variables or give decimal column size.",
      see: "See How"
    },
    {
      image: StyleGuide,
      heading: "Style guide",
      description: "Update theme throughout the application easily.",
      see: "See How"
    },
    {
      image: Spacing,
      heading: "Spacing",
      description: "A better and controlled way of update spacing.",
      see: "See How"
    },
    {
      image: Responsive,
      heading: "Responsive",
      description: "Better control to make the app responsive.",
      see: "See How"
    }
  ]
  return (
    <Box w={"90%"} m={"auto"} my={"5rem"}>
      <Box mt={"2rem"} mb={"2rem"}>
         <Divider  bg="gray.700" />
         </Box>
      <Text fontWeight={500} fontSize={{ base: "1rem", md: "1.25rem", lg: "0.9rem" }}  color={"#FFF"} bg={"#000"} py={"0.5rem"} px={"1rem"} borderRadius={"3rem"} display="inline-block" mb={"2rem"}> Key features</Text>

      <Text fontWeight={500} fontSize={{ base: "2.2rem", md: "2rem", lg: "2.5rem" }}  color={"#000000"} mb={{ base: "0.5rem", md: "1rem", lg: "0.75rem" }} >Why Use Atomize React ?</Text>

      <Text fontWeight={400} fontSize={{ base: "1rem", md: "1.1rem", lg: "1rem" }}  color={"#505256"} mb={{ base: "0.5rem", md: "1rem", lg: "0rem" }} w={{md:"70%",lg:"40%"}}>Atomize React helps you in building fully responsive websites and product that match your style</Text>

      <SimpleGrid columns={{ base: "1", md: "2", lg: "4" }} gap={"1.5rem"} mt={"3rem"}>
        {data.map((el, index) => (
          <Box key={index}  py={"2.5rem"} px={"1.5rem"} boxShadow= {"rgba(51, 51, 51, 0.24) 0px 3px 5px;"} borderRadius={"0.5rem"}>
            <Image src={el.image} alt={el.heading} mb={"1.5rem"} />

            <Text mb={"0.75rem"} fontWeight={500} fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }}  color={"#000"}>{el.heading}</Text>

            <Text mb={"2rem"} fontWeight={400} fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}  color={"#000"}>{el.description}</Text>

            <Text  fontWeight={500} fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}  color={"#0284fe"}>{el.see}</Text>

          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
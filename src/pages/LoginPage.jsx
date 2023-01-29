import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import FlexBetween from "../components/FlexBetween"
import Form from "../components/Form"

const LoginPage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
  return (
    <Box height="100%">
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          LinkBetween
        </Typography>
      </Box>
      <FlexBetween height="100%">
        <Box
          mb="40vmin"
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m={`2rem auto ${isNonMobileScreens ? "20" : "40"}%`}
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Welcome to Socipedia, the Social Media for Sociopaths!
          </Typography>
          <Form />
        </Box>
      </FlexBetween>
    </Box>
  )
}

export default LoginPage

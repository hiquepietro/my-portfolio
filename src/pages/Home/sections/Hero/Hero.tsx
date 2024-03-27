import {Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import Foto from "../../../../assets/images/Foto.jpg";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import {MailOutlined } from "@mui/icons-material";
import { AnimatedBackground } from "../../../../components/AnimatesBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height:"100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(({theme}) => ({
    width:"80%",
    borderRadius:"50%",
    border:'1px solid' + theme.palette.primary.contrastText,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"300%"} top={-100} right={0}>
                  <AnimatedBackground/>
                </Box>
                <Box position={"relative"} textAlign={"center"}>
                  <StyledImg src={Foto} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="secundary.contrastText" variant="h1" textAlign="center" padding={2}>Pietro Henrique </Typography>
              <Typography color="secundary.contrastText"  variant="h2" textAlign="center">Full Stack Developer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4}display="flex" justifyContent="center">
                  <StyledButton>
                    <MailOutlined />
                    <Typography>Contact</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        Hero
        </Container>
      </StyledHero>
    </>
  )
}
export default Hero;

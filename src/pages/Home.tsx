import React from 'react';
import { Container, Typography, Box, Button, useTheme, Grid } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Home = () => {
  const theme = useTheme();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                animation: `${fadeIn} 1s ease-out`,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              Hi! I'm K.Chandra Shekhar
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{
                animation: `${fadeIn} 1s ease-out 0.3s both`,
                maxWidth: '600px',
                mb: 4,
              }}
            >
              I'm a passionate engineering student with a focus on creating innovative solutions
              and turning ideas into reality through code.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                animation: `${fadeIn} 1s ease-out 0.6s both`,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => scrollToSection('projects')}
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View My Projects
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => scrollToSection('contact')}
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              animation: `${fadeIn} 1s ease-out 0.9s both`,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 20px rgba(0,0,0,0.4)',
                },
                transition: 'all 0.3s ease',
                animation: `${float} 3s ease-in-out infinite`,
                border: `4px solid ${theme.palette.primary.main}`,
              }}
            >
              <img
                src="/Portfolio Pic.jpg" // Replace with your image path
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  backgroundColor: '#fff'
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home; 
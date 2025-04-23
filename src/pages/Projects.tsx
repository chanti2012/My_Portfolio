import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, CardActions, Button, useTheme, Chip, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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

const Projects = () => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Simon Says Game (A memory-based color sequence game)',
      description: ' Logic-based game using arrays, event listeners, and timeouts Focused on improving logic building, event handling, and game flow control.',
      technologies: ['HTML', 'CSS', 'JavaScript',],
      githubLink: 'https://chanti2012.github.io/Simon-Says-Game/'
    },
    {
      title: 'Spotify Clone',
      description: 'Recreated the layout and visual style of Spotify’s music player interface. Focused on responsive design using Flexbox and Grid. Gained hands-on experience with structuring web pages and CSS styling.',
      technologies: ['HTML', 'CSS'],
      githubLink: 'https://chanti2012.github.io/Spotify-Clone/'
    },
    {
      title: 'Airbnb Clone– Full Stack Booking Platform',
      description: 'Designed and developed a full-stack web application for property rental and booking. Key features include user authentication, property listing creation, advanced search with filters, and booking management.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
      githubLink: ''
    },
    {
      title: 'Restaurant Website',
      description: 'Designed a restaurant website to deliver comprehensive information, showcase the menu, highlight special offers, and enable seamless online booking. Created an eye-catching promotional poster and implemented a pre-table booking system.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: ''
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            animation: `${fadeIn} 1s ease-out`,
            color: theme.palette.primary.main,
            mb: 4,
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            animation: `${fadeIn} 1s ease-out 0.3s both`,
            fontSize: '1.1rem',
            lineHeight: 1.8,
            mb: 6,
          }}
        >
          
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            animation: `${fadeIn} 1s ease-out 0.6s both`,
          }}
        >
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minHeight: '400px',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  '& .project-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                  },
                },
                transition: 'all 0.4s ease',
                animation: `${float} 3s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom 
                  color="primary"
                  sx={{ 
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph
                  sx={{
                    flexGrow: 1,
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GitHubIcon />}
                  href={project.githubLink}
                  target="_blank"
                  sx={{
                    width: '100%',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>

        {projects.length > 3 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setShowAll(!showAll)}
              endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
              {showAll ? 'Show Less' : 'View All Projects'}
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Projects; 
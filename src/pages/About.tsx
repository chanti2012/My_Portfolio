import React from 'react';
import { Container, Typography, Box, useTheme, Divider, Link } from '@mui/material';
import { keyframes } from '@mui/system';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WebIcon from '@mui/icons-material/Web';

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const About = () => {
  const theme = useTheme();

  const skills = [
    { icon: <CodeIcon sx={{ fontSize: 40 }} />, name: 'C/C++', color: '#2196f3' },
    { icon: <LanguageIcon sx={{ fontSize: 40 }} />, name: 'Python', color: '#4caf50' },
    { icon: <BrushIcon sx={{ fontSize: 40 }} />, name: 'HTML', color: '#f50057' },
    { icon: <BrushIcon sx={{ fontSize: 40 }} />, name: 'CSS', color: '#f50057' },
    { icon: <CodeIcon sx={{ fontSize: 40 }} />, name: 'JavaScript', color: '#ff9800' },
    { icon: <StorageIcon sx={{ fontSize: 40 }} />, name: 'SQL', color: '#9c27b0' },
    { icon: <CloudIcon sx={{ fontSize: 40 }} />, name: 'Express.js', color: '#00bcd4' },
    { icon: <SecurityIcon sx={{ fontSize: 40 }} />, name: 'Node.js', color: '#f44336' },
    { icon: <DataObjectIcon sx={{ fontSize: 40 }} />, name: 'MongoDB', color: '#795548' },
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        {/* About Section */}
        <Box sx={{ mb: 8 }}>
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
            K.Chandra Shekhar
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              animation: `${fadeIn} 1s ease-out 0.3s both`,
              mb: 3,
            }}
          >
            
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mb: 4,
              animation: `${fadeIn} 1s ease-out 0.6s both`,
            }}
          >
            <Link href="https://github.com/chanti2012/" target="_blank" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <GitHubIcon /> GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/shekhar20/" target="_blank" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LinkedInIcon /> LinkedIn
            </Link>
            <Link href="mailto:ck3911283@gmail.com" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon /> Email
            </Link>
            <Link href="tel:+91 8688647504" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon /> Phone
            </Link>
          </Box>
          <Typography
            variant="body1"
            paragraph
            sx={{
              animation: `${fadeIn} 1s ease-out 0.9s both`,
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            I am a B.Tech (Hons.) Computer Science and Engineering student with a solid foundation in programming and web development. I enjoy tackling complex problems and developing innovative solutions. My journey in technology is fueled by curiosity and a strong desire to create impactful and meaningful applications.


          </Typography>
        </Box>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              animation: `${fadeIn} 1s ease-out 1.2s both`,
              color: theme.palette.primary.main,
            }}
          >
            Technical Skills
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
              animation: `${fadeIn} 1s ease-out 1.5s both`,
            }}
          >
            {skills.map((skill, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                    '& .skill-icon': {
                      animation: `${rotate} 1s linear infinite`,
                    },
                  },
                  transition: 'all 0.3s ease',
                  animation: `${float} 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Box
                  className="skill-icon"
                  sx={{
                    color: skill.color,
                    mb: 1,
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography variant="h6" color="text.primary">
                  {skill.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Power Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              animation: `${fadeIn} 1s ease-out 1.8s both`,
              color: theme.palette.primary.main,
            }}
          >
            Power Skills
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
              animation: `${fadeIn} 1s ease-out 2.1s both`,
            }}
          >
            {[
              { icon: <GroupIcon sx={{ fontSize: 40 }} />, name: 'Teamwork', color: '#e91e63' },
              { icon: <TimerIcon sx={{ fontSize: 40 }} />, name: 'Time Management', color: '#9c27b0' },
              { icon: <SchoolIcon sx={{ fontSize: 40 }} />, name: 'Quick Learner', color: '#2196f3' },
              { icon: <LeaderboardIcon sx={{ fontSize: 40 }} />, name: 'Leadership', color: '#4caf50' },
              { icon: <PsychologyIcon sx={{ fontSize: 40 }} />, name: 'Critical Thinking', color: '#ff9800' },
            ].map((skill, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                    '& .skill-icon': {
                      animation: `${rotate} 1s linear infinite`,
                    },
                  },
                  transition: 'all 0.3s ease',
                  animation: `${float} 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Box
                  className="skill-icon"
                  sx={{
                    color: skill.color,
                    mb: 1,
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography variant="h6" color="text.primary">
                  {skill.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Achievements Section */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              animation: `${fadeIn} 1s ease-out 2.4s both`,
              color: theme.palette.primary.main,
            }}
          >
            Achievements
          </Typography>
          <Box
            sx={{
              animation: `${fadeIn} 1s ease-out 2.7s both`,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '20px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
              }
            }}
          >
            {[
              {
                icon: <CodeOffIcon sx={{ fontSize: 24 }} />,
                title: 'NCC (National Cadet Corps)',
                description: 'NCC- C Certificate Holder',
                color: '#2196f3'
              },
              {
                icon: <EmojiEventsIcon sx={{ fontSize: 24 }} />,
                title: 'State Level Camp.',
                description: 'Participated in State Level Camp (Thal Sainik Camp), NCC– developed leadership and discipline.',
                color: '#ffd700'
              },
              {
                icon: <StarIcon sx={{ fontSize: 24 }} />,
                title: 'Sports',
                description: 'Participated in Inter-Platoon Competition (NCC) and won Gold Medals in: Football, Basketball, and Badminton.',
                color: '#c0c0c0'
              },
              {
                icon: <MilitaryTechIcon sx={{ fontSize: 24 }} />,
                title: 'GeeksforGeeks',
                description: 'Successfully completed a 230- hour course on Data Structures and Algorithms- Self Paced.',
                color: '#cd7f32'
              }
            ].map((achievement, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 4,
                  position: 'relative',
                  '&:last-child': {
                    mb: 0
                  }
                }}
              >
                <Box
                  sx={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.paper',
                    border: `2px solid ${achievement.color}`,
                    color: achievement.color,
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 0 0 4px rgba(255,255,255,0.1)',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: `0 0 0 4px ${achievement.color}33`,
                      '& .achievement-icon': {
                        animation: `${rotate} 1s linear infinite`,
                      },
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box className="achievement-icon">
                    {achievement.icon}
                  </Box>
                </Box>
                <Box
                  sx={{
                    ml: 3,
                    flex: 1,
                    pt: 0.5,
                  }}
                >
                  <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{
                      mb: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About; 
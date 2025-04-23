import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
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

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      school: 'Lovely Professional University',
      location: 'Jalandhar, Punjab, India',
      period: 'August 2022 - May 2026',
      score: 'CGPA: 7.14',
      courses: ['Object Oriented Programming', 'DSA', 'Computer Networks', 'Operating Systems']
    },
    {
      degree: '12th ',
      school: ' Kendriya Vidyalaya Bolarum',
      location: 'Secunderabad, Telangana, India',
      period: 'April 2021 - May 2022',
      score: 'Score: 77%',
      courses: ['Mathematics', 'Chemistry', 'Physics']
    },
    {
      degree: '10th ',
      school: ' Kendriya Vidyalaya Bolarum',
      location: 'Secunderabad, Telangana, India',
      period: 'April 2019 - May 2020',
      score: 'Score: 86%',
      courses: ['Mathematics', 'Chemistry', 'Physics', 'Biology']
    }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            animation: `${fadeIn} 1s ease-out`,
            color: 'primary.main',
            mb: 4,
          }}
        >
          Education
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            animation: `${fadeIn} 1s ease-out 0.3s both`,
            fontSize: '1.1rem',
            lineHeight: 1.8,
          }}
        >
          
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            animation: `${fadeIn} 1s ease-out 0.6s both`,
          }}
        >
          {education.map((edu, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 3,
                display: 'flex',
                alignItems: 'flex-start',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <SchoolIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {edu.school}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.location} | {edu.period}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  {edu.score}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {edu.courses.map((course, courseIndex) => (
                    <Typography
                      key={courseIndex}
                      variant="body2"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {course}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Education; 
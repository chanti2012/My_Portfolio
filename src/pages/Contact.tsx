import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to reach out to me for any opportunities or questions.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Send a Message
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>

          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Connect With Me
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                startIcon={<EmailIcon />}
                href="mailto:ck3911283@gmail.com"
                sx={{ mb: 2 }}
              >
                ck3911283@gmail.com
              </Button>
              <br />
              <Button
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/shekhar20/"
                target="_blank"
                sx={{ mb: 2 }}
              >
                LinkedIn Profile
              </Button>
              <br />
              <Button
                startIcon={<GitHubIcon />}
                href="https://github.com/chanti2012/"
                target="_blank"
              >
                GitHub Profile
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact; 
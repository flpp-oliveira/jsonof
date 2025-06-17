import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          mt: 4,
          borderRadius: 2, 
          backgroundColor: 'rgba(18, 18, 18, 0.7)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sobre o Projeto
        </Typography>
        <Typography variant="body1" paragraph>
          O JSON Open Finance é uma ferramenta para criação e gerenciamento de arquivos JSON 
          para integração com sistemas de Open Finance.
        </Typography>
        <Typography variant="body1">
          Esta aplicação foi desenvolvida para facilitar a criação, validação e armazenamento
          de arquivos de configuração para instituições financeiras que precisam se integrar
          aos sistemas de Open Finance.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
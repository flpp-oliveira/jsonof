import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado');
  };

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
          Entre em Contato
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          Tem dúvidas ou sugestões? Entre em contato conosco preenchendo o formulário abaixo.
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nome"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Assunto"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mensagem"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                sx={{ mt: 2 }}
              >
                Enviar Mensagem
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
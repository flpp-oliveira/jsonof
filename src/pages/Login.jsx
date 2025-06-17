import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Container,
  CircularProgress,
  Alert
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      
      const result = await login();
      
      if (result.success) {
        // Redirecionar para o dashboard na mesma aba
        window.location.href = '/dashboard';
        // Não usamos navigate aqui pois estamos em uma nova aba
        // e queremos substituir completamente a página de login
      } else {
        setError(result.error || 'Falha ao realizar login.');
      }
    } catch (err) {
      setError('Ocorreu um erro ao tentar realizar o login.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          py: 8
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            borderRadius: 2, 
            backgroundColor: 'rgba(18, 18, 18, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            width: '100%',
            maxWidth: 400
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 600 }}
          >
            Entre na sua conta
          </Typography>
          
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            Faça login para acessar todos os recursos
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            variant="contained"
            fullWidth
            size="large"
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <GoogleIcon />}
            onClick={handleGoogleLogin}
            disabled={loading}
            sx={{
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              backgroundColor: '#4285F4', // Cor do Google
              '&:hover': {
                backgroundColor: '#3367D6', // Cor mais escura do Google
              }
            }}
          >
            {loading ? 'Processando...' : 'Continuar com Google'}
          </Button>
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button 
              variant="text" 
              onClick={() => navigate('/')}
              sx={{ textTransform: 'none', color: 'text.secondary' }}
            >
              Voltar para o início
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
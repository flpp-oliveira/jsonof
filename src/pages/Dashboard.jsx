import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent,
  CardActions,
  Button,
  Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  // Obtém o primeiro nome do usuário
  const firstName = currentUser?.displayName?.split(' ')[0] || 'Usuário';

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Olá, {firstName}!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bem-vindo ao seu painel de controle. Aqui você pode gerenciar seus JSONs para Open Finance.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {/* Card de Ação Principal */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 2,
              backgroundColor: 'rgba(18, 18, 18, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Criar novo JSON
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Crie um novo arquivo JSON para integração com Open Finance.
                Utilize nossos templates ou crie do zero.
              </Typography>
            </Box>
            
            <Box sx={{ mt: 'auto' }}>
              <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={() => navigate('/generate')}
                fullWidth
                sx={{
                  py: 1.5,
                  mt: 2,
                  borderRadius: 2,
                  boxShadow: '0 8px 16px rgba(156, 39, 176, 0.3)'
                }}
              >
                Criar Novo JSON
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        {/* Card de Histórico */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 2,
              backgroundColor: 'rgba(18, 18, 18, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                JSONs Recentes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Acesse seus arquivos JSON criados recentemente.
              </Typography>
            </Box>
            
            <Box sx={{ 
              py: 2, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              opacity: 0.7
            }}>
              <HistoryIcon sx={{ fontSize: 60, opacity: 0.5, mb: 2 }} />
              <Typography variant="body1" align="center">
                Nenhum histórico disponível
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Seus JSONs criados aparecerão aqui.
              </Typography>
            </Box>
            
            <Box sx={{ mt: 'auto' }}>
              <Button 
                variant="outlined" 
                color="primary"
                fullWidth
                sx={{
                  py: 1.5,
                  mt: 2,
                  borderRadius: 2,
                }}
                disabled
              >
                Ver Histórico
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        {/* Card de Configurações */}
        <Grid item xs={12}>
          <Paper 
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: 'rgba(18, 18, 18, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SettingsIcon sx={{ mr: 1, opacity: 0.7 }} />
              <Typography variant="h6" component="h3">
                Configurações da Conta
              </Typography>
            </Box>
            
            <Divider sx={{ mb: 2, opacity: 0.2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Email:
                </Typography>
                <Typography variant="body1">
                  {currentUser?.email || 'Não disponível'}
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="text.secondary">
                  Plano atual:
                </Typography>
                <Typography variant="body1">
                  Gratuito
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
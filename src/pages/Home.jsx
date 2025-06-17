import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();

  // Função para abrir o login em uma nova aba
  const handleConsoleClick = () => {
    window.open('/login', '_blank');
  };

  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70vh', // Altura para centralizar na tela
          textAlign: 'center',
          py: 8
        }}
      >
        {/* Mensagem principal */}
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{
            fontWeight: 600,
            mb: 4,
            background: 'linear-gradient(45deg, #fff, #ccc)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 4px 20px rgba(255, 255, 255, 0.1)'
          }}
        >
          Nós facilitamos a criação, armazenamento e gestão de seus Jsons Open Finance
        </Typography>

        {/* Botão centralizado e destacado - agora com nova ação */}
        <Button 
          variant="contained" 
          size="large"
          onClick={handleConsoleClick} // Nova função para abrir em nova aba
          sx={{
            mt: 6,
            py: 1.5,
            px: 6,
            fontSize: '1.2rem',
            fontWeight: 500,
            borderRadius: '8px',
            backgroundColor: theme.palette.primary.main,
            boxShadow: `0 0 20px ${theme.palette.primary.main}`,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: `0 0 30px ${theme.palette.primary.main}`,
              transform: 'translateY(-3px)'
            },
            '&:active': {
              transform: 'translateY(1px)'
            }
          }}
        >
          ACESSAR CONSOLE
        </Button>

        {/* Efeito visual sutil para o fundo */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'radial-gradient(circle at center, rgba(156, 39, 176, 0.05) 0%, transparent 70%)',
            zIndex: -1,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Container>
  );
};

export default Home;
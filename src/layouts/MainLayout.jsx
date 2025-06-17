import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { Header, Footer } from '../common';

/**
 * Layout principal da aplicação com tema preto intenso
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo a ser renderizado dentro do layout
 * @param {Object} props.headerProps - Propriedades para o componente Header
 * @param {Object} props.footerProps - Propriedades para o componente Footer
 * @returns {JSX.Element} Layout principal
 */
const MainLayout = ({ 
  children, 
  headerProps = {}, 
  footerProps = {} 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#000000', // Preto puro
        color: '#ffffff',
        // Sutil gradiente radial para dar profundidade ao preto
        backgroundImage: 'radial-gradient(circle at 50% 50%, #050505, #000000 70%)',
      }}
    >
      <CssBaseline />
      <Header {...headerProps} />
      {/* Toolbar vazia para compensar o espaço do header fixo */}
      <Toolbar />
      <Container 
        component="main" 
        sx={{ 
          mt: 4, 
          mb: 4, 
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }} 
        maxWidth="lg"
      >
        {children}
      </Container>
      <Footer {...footerProps} />
    </Box>
  );
};

export default MainLayout;
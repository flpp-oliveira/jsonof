import { Box, Container, Typography, Link, Divider, useTheme } from '@mui/material';

/**
 * Componente Footer reutilizável com tema escuro
 * @param {Object} props - Propriedades do componente
 * @param {string} props.copyright - Texto de copyright
 * @param {Array} props.links - Links a serem exibidos no footer
 * @returns {JSX.Element} Componente Footer
 */
const Footer = ({ 
  copyright = "© 2025 Meu App", 
  links = [
    { name: "Política de Privacidade", url: "#" },
    { name: "Termos de Uso", url: "#" },
    { name: "Contato", url: "#" }
  ]
}) => {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: `1px solid ${theme.palette.custom.glassBorder}`,
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(18, 18, 18, 0.7)',
          zIndex: -1,
        }
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' }
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              textShadow: '0 0 10px rgba(156, 39, 176, 0.3)'
            }}
          >
            {copyright}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ffffff',
                    textShadow: '0 0 8px rgba(186, 104, 200, 0.8)'
                  }
                }}
                variant="body2"
              >
                {link.name}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
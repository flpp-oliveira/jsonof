import { createTheme } from '@mui/material/styles';

// Tema escuro com preto profundo e fonte mais profissional
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0',      // Roxo Material UI padrão
      light: '#ba68c8',     // Roxo claro
      dark: '#6a1b9a',      // Roxo escuro
    },
    secondary: {
      main: '#e040fb',
    },
    background: {
      default: '#000000',   // Preto puro para o fundo
      paper: '#0a0a0a',     // Preto quase puro para elementos de papel
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    // Cores personalizadas para o header espelhado
    custom: {
      deepBlack: '#000000',         // Preto puro
      mirrorEffect: 'rgba(15, 15, 15, 0.75)', // Efeito espelhado mais escuro
      glassBlack: 'rgba(5, 5, 5, 0.9)',      // Preto com transparência para vidro
      borderColor: 'rgba(255, 255, 255, 0.1)' // Borda branca muito sutil
    }
  },
  typography: {
    // Definindo a fonte principal como Inter, uma fonte profissional e moderna
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none', // Evita letras maiúsculas nos botões para um visual mais moderno
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          backgroundColor: #000000;
          scrollbarColor: "#333 #000";
          &::-webkit-scrollbar, & *::-webkit-scrollbar {
            backgroundColor: "#000";
            width: "8px";
          }
          &::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb {
            borderRadius: 8;
            backgroundColor: "#333";
            minHeight: 24;
          }
        }
      `,
    },
  },
});

export default theme;
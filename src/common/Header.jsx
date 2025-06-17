import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
  Button,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

/**
 * Componente Header com navegação integrada ao React Router
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título a ser exibido no header
 * @param {Component} props.titleIcon - Ícone para ser exibido como título
 * @param {Array} props.menuItems - Itens de menu a serem exibidos
 * @param {boolean} props.transparent - Define se o header terá efeito espelhado
 * @param {boolean} props.scrollTransparent - Ajusta o efeito ao rolar a página
 * @param {Function} props.onLoginClick - Função a ser chamada quando o botão de login for clicado
 * @param {boolean} props.isAuthenticated - Indica se o usuário está autenticado
 * @param {string} props.userPhotoURL - URL da foto do usuário (quando autenticado)
 * @param {string} props.userName - Nome do usuário (quando autenticado)
 * @returns {JSX.Element} Componente Header
 */
const Header = ({ 
  title = "", 
  titleIcon: TitleIcon = null,
  menuItems = ["Home", "Sobre", "Contato"],
  transparent = true,
  scrollTransparent = true,
  onLoginClick = () => console.log("Login clicked"),
  isAuthenticated = false,
  userPhotoURL = null,
  userName = ""
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Navegação e localização atual do React Router
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determina qual aba deve estar ativa com base na URL atual
  const getCurrentTabIndex = () => {
    // Mapeamento de itens de menu para caminhos de URL
    const pathMap = {
      'Home': '/',
      'Generate': '/generate',
      'Sobre': '/sobre',
      'Contato': '/contato'
    };
    
    const currentPath = location.pathname;
    
    // Encontra o índice do item de menu correspondente ao caminho atual
    const activeIndex = menuItems.findIndex(item => 
      pathMap[item] === currentPath || 
      (currentPath === '/' && item === 'Home')
    );
    
    return activeIndex >= 0 ? activeIndex : 0;
  };
  
  const [selectedTab, setSelectedTab] = useState(getCurrentTabIndex());
  
  // Atualiza a aba selecionada quando a URL muda
  useEffect(() => {
    setSelectedTab(getCurrentTabIndex());
  }, [location.pathname]);

  // Efeito para detectar rolagem da página
  useEffect(() => {
    if (!scrollTransparent) return;
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTransparent]);

  // Estilo do header
  const appBarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundImage: 'none',
    backdropFilter: `blur(${isScrolled ? '15px' : '10px'})`,
    WebkitBackdropFilter: `blur(${isScrolled ? '15px' : '10px'})`,
    borderRadius: 0,
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
    boxShadow: 'none',
    transition: 'all 0.4s ease',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.palette.custom?.mirrorEffect || 'rgba(10, 10, 10, 0.9)',
      backgroundImage: `
        linear-gradient(
          to bottom,
          rgba(30, 30, 30, 0.1) 0%,
          rgba(8, 8, 8, 0.95) 100%
        )
      `,
      zIndex: -1,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
      zIndex: -1,
    }
  };

  // Função para navegação ao clicar em um item de menu
  const handleNavigation = (index, item) => {
    // Mapeamento de itens de menu para caminhos de URL
    const pathMap = {
      'Home': '/',
      'Generate': '/generate',
      'Sobre': '/sobre',
      'Contato': '/contato'
    };
    
    setSelectedTab(index);
    navigate(pathMap[item] || '/');
    
    // Em dispositivos móveis, fecha o drawer após a navegação
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Menu lateral para dispositivos móveis
  const menuList = (
    <Box
      sx={{ 
        width: 250,
        backgroundColor: 'rgba(0, 0, 0, 0.97)',
        backdropFilter: 'blur(20px)',
        height: '100%',
        borderLeft: '1px solid rgba(255, 255, 255, 0.03)'
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text, index) => (
          <ListItem 
            key={text} 
            disablePadding 
            onClick={() => handleNavigation(index, text)}
          >
            <ListItemButton 
              selected={selectedTab === index}
              sx={{
                borderBottom: selectedTab === index ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                '&:hover': {
                  backgroundColor: 'rgba(30, 30, 30, 0.5)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(25, 25, 25, 0.8)',
                }
              }}
            >
              <ListItemText 
                primary={text} 
                primaryTypographyProps={{
                  fontWeight: selectedTab === index ? 500 : 400,
                  color: selectedTab === index ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      {/* Botão de login/logout no menu lateral */}
      <Box sx={{ p: 2, mt: 2 }}>
        {isAuthenticated ? (
          <>
            {/* Exibir informações do usuário quando logado */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar 
                src={userPhotoURL} 
                alt={userName || 'User'}
                sx={{ width: 32, height: 32, mr: 1 }}
              />
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {userName || 'Usuário'}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<LogoutIcon />}
              onClick={onLoginClick}
              sx={{
                color: '#fff',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  borderColor: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            fullWidth
            startIcon={<LoginIcon />}
            onClick={() => {
              onLoginClick();
              navigate('/login');
            }}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
            }}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={appBarStyle}
      component="nav"
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo/Título - clicável para voltar à Home */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >
          {TitleIcon ? (
            <TitleIcon 
              sx={{ 
                fontSize: '2rem',
                color: '#fff'
              }}
            />
          ) : (
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 500,
                letterSpacing: '0.5px',
                color: '#fff',
              }}
            >
              {title}
            </Typography>
          )}
        </Box>

        {/* Área de navegação centralizada para desktop */}
        {!isMobile && (
          <Box sx={{ 
            position: 'absolute', 
            left: '50%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            width: 'auto'
          }}>
            <Tabs 
              value={selectedTab} 
              textColor="inherit"
              sx={{
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  minWidth: 'unset',
                  px: 3,
                  '&:hover': {
                    color: '#fff',
                  },
                  '&.Mui-selected': {
                    color: '#fff',
                  }
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#ffffff',
                  height: 2,
                  boxShadow: 'none',
                }
              }}
            >
              {menuItems.map((item, index) => (
                <Tab 
                  key={item} 
                  label={item} 
                  disableRipple 
                  onClick={() => handleNavigation(index, item)} 
                />
              ))}
            </Tabs>
          </Box>
        )}

        {/* Menu hambúrguer para mobile */}
        {isMobile && (
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              color: 'white',
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer para menu mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {menuList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
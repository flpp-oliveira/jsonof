import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ConsoleLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    await logout();
    // Fecha a aba ou redireciona para a página inicial
    window.close(); // Tenta fechar a aba
    // Em caso de bloqueio de popup:
    window.location.href = '/';
  };
  
  const menuItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Gerar JSON', path: '/generate' }
  ];
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Console JSON Open Finance
          </Typography>
          
          <Typography variant="body2" sx={{ mr: 2 }}>
            {currentUser?.displayName}
          </Typography>
          
          <Button 
            color="inherit" 
            onClick={handleLogout}
            startIcon={<ExitToAppIcon />}
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={() => navigate(item.path)}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default ConsoleLayout;
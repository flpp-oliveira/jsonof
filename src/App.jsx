import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme';
import MainLayout from './layouts/MainLayout';
import ConsoleLayout from './layouts/ConsoleLayout';
import { Home, Dashboard, About, Contact } from './pages';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Componente para proteger rotas que exigem autenticação
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) return <div>Carregando...</div>;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Componente de conteúdo principal 
const AppContent = () => {
  const { isAuthenticated } = useAuth();

  // Itens de menu para o site principal
  const menuItems = ["Home", "Sobre", "Contato"];

  const headerProps = {
    title: "JSON Open Finance",
    menuItems: menuItems,
    transparent: true,
    scrollTransparent: true
  };
  
  const footerProps = {
    copyright: "© 2025 - JSON Open Finance Creator",
    links: [
      { name: "Política de Privacidade", url: "#" },
      { name: "Termos de Uso", url: "#" },
      { name: "Contato", url: "/contato" }
    ]
  };

  return (
    <Routes>
      {/* Rotas com layout principal (com header e footer) */}
      <Route path="/" element={
        <MainLayout headerProps={headerProps} footerProps={footerProps}>
          <Home />
        </MainLayout>
      } />
      
      <Route path="/sobre" element={
        <MainLayout headerProps={headerProps} footerProps={footerProps}>
          <About />
        </MainLayout>
      } />
      
      <Route path="/contato" element={
        <MainLayout headerProps={headerProps} footerProps={footerProps}>
          <Contact />
        </MainLayout>
      } />
      
      {/* Página de Login sem layout (sem header/footer) */}
      <Route path="/login" element={<Login />} />
      
      {/* Rotas com layout de console (sem header/footer padrão) */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <ConsoleLayout>
            <Dashboard />
          </ConsoleLayout>
        </ProtectedRoute>
      } />
      
      
      {/* Rota de fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
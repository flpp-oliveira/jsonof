import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "./config";

// Provider para autenticação com o Google
const googleProvider = new GoogleAuthProvider();

// Função para fazer login com o Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return {
      user: result.user,
      success: true
    };
  } catch (error) {
    console.error("Erro ao fazer login com Google:", error);
    return {
      error: error.message,
      success: false
    };
  }
};

// Função para fazer logout
export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    return {
      error: error.message,
      success: false
    };
  }
};

// Função para verificar se o usuário está logado
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
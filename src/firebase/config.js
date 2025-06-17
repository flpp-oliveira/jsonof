import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Você precisará substituir estas configurações pelas suas próprias do console do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBq8r338ml856WAym6pAgZVUmDTqAcgXBw",
  authDomain: "jsonauth-c7438.firebaseapp.com",
  projectId: "jsonauth-c7438",
  storageBucket: "jsonauth-c7438.firebasestorage.app",
  messagingSenderId: "802021846190",
  appId: "1:802021846190:web:0a609decf7137a0073913f",
  measurementId: "G-E4W6NHBBT4"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância de autenticação
export const auth = getAuth(app);
export default app;
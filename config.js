// config.js - Configuration Firebase + Infos LumenSpro
// Projet: cours-lumenspro

// 1. Config Firebase - NE PAS TOUCHER LA STRUCTURE
const firebaseConfig = {
  apiKey: "AIzaSyCyYZluEmcM4lXiYIkg9g6v4_-k7O5M0LU",
  authDomain: "cours-lumenspro.firebaseapp.com",
  projectId: "cours-lumenspro",
  storageBucket: "cours-lumenspro.firebasestorage.app",
  messagingSenderId: "210429063963",
  appId: "1:210429063963:web:8c6c60ec6a93828d84d9be"
};

// 2. Infos de ta boîte - Utilisé dans les pages
const appConfig = {
  whatsapp: "22891532410",
  tel: "+228 91 53 24 10",
  email: "etslumenspro@gmail.com",
  nom: "LUMEN S-PRO SERVICES",
  ville: "Vogan",
  annee: "2026"
};

// 3. Export OBLIGATOIRE pour admin.html et login.html
export { firebaseConfig, appConfig };
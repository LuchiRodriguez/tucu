// src/config/firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  // ¡CAMBIO CLAVE AQUÍ! Accedemos a las variables de entorno.
  // Asegúrate de que los nombres coincidan con los de tu archivo .env y tengan el prefijo VITE_.
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // Puede que no todos los proyectos lo tengan
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén las instancias de los servicios que usas
export const auth = getAuth(app);
export const db = getFirestore(app);

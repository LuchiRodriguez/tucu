// Importa las funciones necesarias de los SDK que vas a usar
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para la autenticación (registro, login)
import { getFirestore } from "firebase/firestore"; // Para la base de datos (guardar info de alumnos)
import { getAnalytics } from "firebase/analytics";

// Tu objeto de configuración de Firebase (el que copiaste en el Paso 1)
const firebaseConfig = {
  apiKey: "AIzaSyDDFcbhF1kWP8J_U5GVBzC4GTDibbGN0po",
  authDomain: "profangelsanroman-2d392.firebaseapp.com",
  projectId: "profangelsanroman-2d392",
  storageBucket: "profangelsanroman-2d392.firebasestorage.app",
  messagingSenderId: "1022958173798",
  appId: "1:1022958173798:web:0c9ea3c8b1593c2dd4b7a7",
  measurementId: "G-Y5WG2WVWGF"
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de Authentication y Firestore
const auth = getAuth(app);
const db = getFirestore(app);

const analytics = getAnalytics(app);

// Exporta las instancias para usarlas en otros archivos de tu proyecto
export { auth, db, analytics };
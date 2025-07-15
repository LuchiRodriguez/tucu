// src/hooks/useExercisesApi/useExercisesApi.js
import { useState, useEffect, useCallback } from 'react'; // Importamos los hooks específicos

const API_BASE_URL = 'https://wger.de/api/v2/';

/**
 * Hook personalizado para interactuar con la API de ejercicios de Wger.
 * Proporciona funciones para buscar ejercicios y cargar datos de referencia (categorías, músculos, equipo, idiomas).
 *
 * @returns {object} Un objeto con:
 * - exercises: Array de ejercicios detallados.
 * - loading: Booleano que indica si se está cargando información.
 * - error: Objeto de error si ocurre alguno.
 * - searchExercises: Función para buscar ejercicios.
 * - categories: Objeto de categorías (id -> nombre).
 * - muscles: Objeto de músculos (id -> nombre).
 * - equipment: Objeto de equipo (id -> nombre).
 * - languages: Objeto de idiomas (id -> short_name).
 */
function useExercisesApi() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Estados para los datos de referencia
  const [categories, setCategories] = useState({});
  const [muscles, setMuscles] = useState({});
  const [equipment, setEquipment] = useState({});
  const [languages, setLanguages] = useState({});

  /**
   * Carga los datos de referencia (categorías, músculos, equipo, idiomas) desde la API.
   * Estos datos son necesarios para mapear IDs a nombres en los ejercicios.
   */
  const loadReferenceData = useCallback(async () => {
    try {
      const [
        categoriesRes,
        musclesRes,
        equipmentRes,
        languagesRes
      ] = await Promise.all([
        fetch(`${API_BASE_URL}exercisecategory/`),
        fetch(`${API_BASE_URL}muscle/`),
        fetch(`${API_BASE_URL}equipment/`),
        fetch(`${API_BASE_URL}language/`)
      ]);

      // Verificar si alguna respuesta no fue exitosa
      if (!categoriesRes.ok) throw new Error(`Error fetching categories: ${categoriesRes.statusText}`);
      if (!musclesRes.ok) throw new Error(`Error fetching muscles: ${musclesRes.statusText}`);
      if (!equipmentRes.ok) throw new Error(`Error fetching equipment: ${equipmentRes.statusText}`);
      if (!languagesRes.ok) throw new Error(`Error fetching languages: ${languagesRes.statusText}`);

      const [
        categoriesData,
        musclesData,
        equipmentData,
        languagesData
      ] = await Promise.all([
        categoriesRes.json(),
        musclesRes.json(),
        equipmentRes.json(),
        languagesRes.json()
      ]);

      // Función auxiliar para mapear resultados a un objeto {id: name}
      const mapById = (items) => items.results.reduce((acc, item) => {
        acc[item.id] = item.name;
        return acc;
      }, {});
      
      // Función auxiliar específica para mapear idiomas a {id: short_name}
      const mapLanguagesById = (items) => items.results.reduce((acc, item) => {
        acc[item.id] = item.short_name;
        return acc;
      }, {});

      setCategories(mapById(categoriesData));
      setMuscles(mapById(musclesData));
      setEquipment(mapById(equipmentData));
      setLanguages(mapLanguagesById(languagesData));

    } catch (err) {
      console.error("Error al cargar los datos de referencia:", err);
      setError(err); // Establecer el error para que el componente que usa el hook pueda reaccionar
    }
  }, []); // Las dependencias son vacías porque no depende de ningún estado o prop externo

  // Efecto para cargar los datos de referencia una vez al montar el componente
  useEffect(() => {
    loadReferenceData();
  }, [loadReferenceData]); // Se ejecuta solo cuando loadReferenceData cambia (que es solo una vez)

  /**
   * Busca ejercicios en la API de Wger.
   * @param {object} query - Objeto de parámetros de consulta para la API (ej. { language: 2, search: 'press' }).
   */
  const searchExercises = useCallback(async (query = {}) => {
    setLoading(true);
    setError(null);
    setExercises([]); // Limpiar ejercicios anteriores al iniciar una nueva búsqueda

    // Establecer el idioma por defecto a español (ID 2 para Wger)
    const defaultQuery = { language: 2, ...query };
    const params = new URLSearchParams(defaultQuery).toString();
    const url = `${API_BASE_URL}exercise/?${params}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error al buscar ejercicios: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // NOTA: Esta implementación realiza una petición adicional por cada ejercicio para obtener detalles.
      // Para un gran número de ejercicios, esto puede ser ineficiente (problema N+1).
      // Si el rendimiento es una preocupación, se podría considerar:
      // 1. Obtener solo los detalles necesarios del endpoint /exercise/.
      // 2. Cargar los detalles completos de un ejercicio solo cuando el usuario lo selecciona.
      const detailedExercisesPromises = data.results.map(async (ex) => {
        const detailResponse = await fetch(`${API_BASE_URL}exerciseinfo/${ex.id}/?language=2`); // Idioma 2 (español)
        if (!detailResponse.ok) {
            console.warn(`No se pudieron obtener detalles para el ejercicio ID: ${ex.id}. Usando datos básicos.`);
            return {
                ...ex,
                name: ex.name || 'Nombre no disponible', // Usar el nombre de la lista si no hay detalles
                description: 'Instrucciones no disponibles',
                category_name: categories[ex.category] || 'Desconocido',
                muscles_names: (ex.muscles || []).map(mId => muscles[mId] || 'Desconocido'),
                equipment_names: (ex.equipment || []).map(eId => equipment[eId] || 'Desconocido'),
            };
        }
        const detailData = await detailResponse.json();
        return {
            ...ex, // Mantener propiedades originales como id
            name: detailData.name || ex.name || 'Nombre no disponible', // Preferir el nombre detallado
            description: detailData.description || 'Instrucciones no disponibles',
            category_name: categories[ex.category] || 'Desconocido',
            muscles_names: (ex.muscles || []).map(mId => muscles[mId] || 'Desconocido'),
            equipment_names: (ex.equipment || []).map(eId => equipment[eId] || 'Desconocido'),
        };
      });

      const detailedExercises = await Promise.all(detailedExercisesPromises);
      setExercises(detailedExercises);
      
    } catch (err) {
      console.error("Error al buscar ejercicios:", err);
      setError(err); // Establecer el error
    } finally {
      setLoading(false); // Finalizar carga
    }
  }, [categories, muscles, equipment]); // Depende de los datos de referencia para mapear nombres

  return { exercises, loading, error, searchExercises, categories, muscles, equipment, languages };
}

export { useExercisesApi };

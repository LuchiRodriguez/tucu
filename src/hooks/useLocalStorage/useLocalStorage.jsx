// src/hooks/useLocalStorage/useLocalStorage.js
import { useEffect, useReducer, useCallback } from 'react'; // Importamos los hooks específicos

/**
 * Define los tipos de acciones para el reducer.
 */
const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

/**
 * Función que define el estado inicial del hook useLocalStorage.
 * @param {object} params - Parámetros para el estado inicial.
 * @param {*} params.initialValue - Valor inicial para el ítem en el localStorage.
 * @returns {object} El estado inicial.
 */
const initialState = ({ initialValue }) => ({
  sincronizedItem: true, // Indica si el ítem está sincronizado con localStorage
  error: null,          // Almacena cualquier error que ocurra
  loading: true,        // Indica si se está cargando el ítem
  item: initialValue    // El valor actual del ítem
});

/**
 * Objeto que mapea tipos de acción a funciones que actualizan el estado.
 * @param {object} state - El estado actual.
 * @param {*} payload - La carga útil de la acción.
 * @returns {object} El nuevo estado.
 */
const reducerObject = (state, payload) => ({
  [actionTypes.error]: { ...state, error: payload, loading: false }, // Almacena el error y detiene la carga
  [actionTypes.success]: { ...state, item: payload, loading: false, error: null, sincronizedItem: true }, // Actualiza el ítem, detiene la carga, limpia errores y sincroniza
  [actionTypes.save]: { ...state, item: payload }, // Solo actualiza el ítem en el estado
  [actionTypes.sincronize]: { ...state, loading: true, sincronizedItem: false, error: null }, // Inicia sincronización, carga y limpia errores
});

/**
 * Función reducer que maneja las transiciones de estado.
 * @param {object} state - El estado actual.
 * @param {object} action - La acción a despachar.
 * @returns {object} El nuevo estado.
 */
const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return state; // Devuelve el estado actual si la acción no es reconocida
};

/**
 * Hook personalizado para manejar el almacenamiento local (localStorage).
 * Proporciona una forma de persistir y sincronizar un estado con localStorage.
 *
 * @param {string} itemName - La clave bajo la cual se almacenará el ítem en localStorage.
 * @param {*} initialValue - El valor inicial del ítem si no existe en localStorage.
 * @returns {object} Un objeto con:
 * - item: El valor actual del ítem.
 * - saveItem: Función para guardar un nuevo valor del ítem.
 * - loading: Booleano que indica si el ítem está cargando.
 * - error: Objeto de error si ocurre alguno.
 * - sincronizeItem: Función para forzar una resincronización con localStorage.
 */
function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { sincronizedItem, error, loading, item } = state;

  // Action creators usando useCallback para memoizar
  const onError = useCallback((err) => dispatch({ type: actionTypes.error, payload: err }), []);
  const onSuccess = useCallback((data) => dispatch({ type: actionTypes.success, payload: data }), []);
  const onSave = useCallback((data) => dispatch({ type: actionTypes.save, payload: data }), []);
  const onSincronize = useCallback(() => dispatch({ type: actionTypes.sincronize }), []);
  
  // Efecto para cargar el ítem de localStorage
  useEffect(() => {
    let timeoutId;
    // Usamos un setTimeout para simular una operación asíncrona (ej. una API real)
    // y evitar bloqueos en el renderizado inicial.
    timeoutId = setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          // Si no existe en localStorage, lo inicializamos con el valor proporcionado
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si existe, lo parseamos
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem); // Despacha éxito con el ítem cargado
      } catch (err) {
        console.error("Error al cargar de localStorage:", err);
        onError(err); // Despacha error
      }
    }, 2000); // Retraso de 2 segundos

    // Función de limpieza para el efecto
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [sincronizedItem, itemName, initialValue, onError, onSuccess]); // Dependencias correctas

  /**
   * Guarda un nuevo valor para el ítem en localStorage y actualiza el estado.
   * @param {*} newItem - El nuevo valor a guardar.
   */
  const saveItem = useCallback((newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem); // Despacha la acción de guardar
    } catch (err) {
      console.error("Error al guardar en localStorage:", err);
      onError(err); // Despacha error
    }
  }, [itemName, onSave, onError]);

  /**
   * Fuerza una resincronización del estado con el valor en localStorage.
   */
  const sincronizeItem = useCallback(() => {
    onSincronize(); // Despacha la acción de sincronizar
  }, [onSincronize]);

  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };

import React from 'react';

const API_BASE_URL = 'https://wger.de/api/v2/';

function useExercisesApi() { // ¡Nombre corregido aquí!
  const [exercises, setExercises] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [categories, setCategories] = React.useState({});
  const [muscles, setMuscles] = React.useState({});
  const [equipment, setEquipment] = React.useState({});
  const [languages, setLanguages] = React.useState({});

  const loadReferenceData = React.useCallback(async () => {
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

      const mapById = (items) => items.results.reduce((acc, item) => {
        acc[item.id] = item.name;
        return acc;
      }, {});
      
      const mapLanguagesById = (items) => items.results.reduce((acc, item) => {
        acc[item.id] = item.short_name;
        return acc;
      }, {});

      setCategories(mapById(categoriesData));
      setMuscles(mapById(musclesData));
      setEquipment(mapById(equipmentData));
      setLanguages(mapLanguagesById(languagesData));

    } catch (err) {
      console.error("Error loading reference data:", err);
    }
  }, []);

  React.useEffect(() => {
    loadReferenceData();
  }, [loadReferenceData]);

  const searchExercises = React.useCallback(async (query = {}) => {
    setLoading(true);
    setError(null);
    setExercises([]);

    const defaultQuery = { language: 2, ...query };
    const params = new URLSearchParams(defaultQuery).toString();
    const url = `${API_BASE_URL}exercise/?${params}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      const detailedExercisesPromises = data.results.map(async (ex) => {
        const detailResponse = await fetch(`${API_BASE_URL}exerciseinfo/${ex.id}/?language=2`);
        if (!detailResponse.ok) {
            console.warn(`Could not fetch details for exercise ID: ${ex.id}`);
            return {
                ...ex,
                name: 'Nombre no disponible',
                description: 'Instrucciones no disponibles',
                category_name: categories[ex.category] || 'Desconocido',
                muscles_names: ex.muscles.map(mId => muscles[mId] || 'Desconocido'),
                equipment_names: ex.equipment.map(eId => equipment[eId] || 'Desconocido'),
            };
        }
        const detailData = await detailResponse.json();
        return {
            ...ex,
            name: detailData.name || 'Nombre no disponible',
            description: detailData.description || 'Instrucciones no disponibles',
            category_name: categories[ex.category] || 'Desconocido',
            muscles_names: ex.muscles.map(mId => muscles[mId] || 'Desconocido'),
            equipment_names: ex.equipment.map(eId => equipment[eId] || 'Desconocido'),
        };
      });

      const detailedExercises = await Promise.all(detailedExercisesPromises);
      setExercises(detailedExercises);
      
    } catch (err) {
      console.error("Error fetching exercises:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [categories, muscles, equipment]);

  return { exercises, loading, error, searchExercises, categories, muscles, equipment, languages };
}

export { useExercisesApi }; // ¡Exportación corregida aquí!
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  const {sincronizedItem, error, loading, item} = state;

  //ACTION CREATORS
  const onError = (error) => dispatch({type: actionTypes.error, payload: error});
  const onSuccess = (item) => dispatch({type: actionTypes.success, payload: item});
  const onSave = (item) => dispatch({type: actionTypes.save, payload: item});
  const onSincronize = () => dispatch({type: actionTypes.sincronize});
  const onStopLoading = () => dispatch({type: actionTypes.stopLoading})
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch(error) {
        onError(error);
        onStopLoading();
      }
    }, 2000);
  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch(error) {
      onError(error);
    }
  };

  const sincronizeItem = () => onSincronize();

  return {item, saveItem, loading, error, sincronizeItem};
}

const initialState = ({initialValue}) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
  stopLoading: 'STOP_LOADING'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {...state, error: true},
  [actionTypes.success]: {...state, item: payload, loading: false, sincronizedItem: true},
  [actionTypes.save]: {...state, item: payload},
  [actionTypes.sincronize]: {...state, loading: true, sincronizedItem: false},
  [actionTypes.stopLoading]: {...state, loading: false}
})

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

export { useLocalStorage };

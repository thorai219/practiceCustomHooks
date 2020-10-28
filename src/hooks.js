import { useState, useEffect } from 'react'
import axios from 'axios';

const useFlip = () => {
  const [faceUp, setFaceUp] = useState(true)

  const flip = () => {
    setFaceUp(f => !f)
  }
  
  return [faceUp, flip]
}

function useAxios(keyInLocalStorage, baseUrl) {
  const [res, setRes] = useLocalStorage(keyInLocalStorage)

  const addResData = async (formatter = data => data, pokemonName = '') => {
    const res = await axios.get(`${baseUrl}${pokemonName}`)
    setRes(data => [...data, formatter(res.data)])
  }

  const clearRes = () => setRes([])

  return [res, addResData, clearRes]
}

function useLocalStorage(key, initVal = []) {
  if (localStorage.getItem(key)) {
    initVal = JSON.parse(localStorage.getItem(key))
  }

  const [val, setVal] = useState(initVal)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val))
  }, [val, key])

  return [val, setVal]
}

export default useLocalStorage

export { useFlip, useAxios, useLocalStorage }
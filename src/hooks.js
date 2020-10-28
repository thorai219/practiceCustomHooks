import { useState, useEffect } from 'react';

const useFlip = () => {
  const [faceUp, setFaceUp] = useState(true)

  const flip = () => {
    setFaceUp(f => !f)
  }
  
  return [faceUp, flip]
}

export default useFlip;
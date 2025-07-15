import React from 'react'
import { Html, useProgress} from '@react-three/drei'
import {CircularProgress} from '@mui/material'

const Loader = () => {
  const {progress} = useProgress()
  return (
    <Html>
    <CircularProgress variant='determinate' color="secondary" value={progress} />
    </Html>
  )
}

export default Loader
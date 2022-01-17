import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Camera } from './Camera'
import { Plane } from './Plane'

export const Scene: React.FunctionComponent = () => (
  <Canvas linear>
    <Camera />
    <Plane />
  </Canvas>
)

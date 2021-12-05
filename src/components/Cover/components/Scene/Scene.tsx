import React from 'react'

import { Canvas } from '@react-three/fiber'

import { Camera } from '../Camera'
import { Plane } from '../Plane'

export const Scene: React.FunctionComponent = () => (
  <Canvas linear>
    <Camera />
    <Plane />
  </Canvas>
)

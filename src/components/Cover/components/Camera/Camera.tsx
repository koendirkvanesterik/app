import React from 'react'
import { warmGray } from 'tailwindcss/colors'
import { MathUtils } from 'three'

import { useThree } from '@react-three/fiber'

export const Camera: React.FunctionComponent = () => {
  /**
   * Use three hook to access canvas camera props
   */
  useThree(({ camera }) => {
    /**
     * Adjust camera rotation to angled perspective
     */
    camera.rotation.set(MathUtils.degToRad(60), 0, 0)
  })
  /**
   * Return ambient light, otherwise declared colors in model component will not
   * be visible
   */
  return (
    <>
      <fog attach="fog" args={[warmGray[900], 0, 40]} />
      <ambientLight />
    </>
  )
}

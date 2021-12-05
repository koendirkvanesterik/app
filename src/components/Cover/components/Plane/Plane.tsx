import React from 'react'
import { emerald } from 'tailwindcss/colors'
import { PlaneGeometry } from 'three'

import { useFrame } from '@react-three/fiber'

export const Plane: React.FunctionComponent = () => {
  /**
   * Define various config values
   */
  const width = 200
  const height = width
  const widthSegments = width / 5
  const heightSegments = widthSegments
  const angle = 6
  const intensity = 3
  const speed = 5
  const swell = 8
  /**
   * Use ref hook to define reference to mesh object
   */
  const ref = React.useRef<PlaneGeometry>()
  /**
   * Use frame hook in order to animate wave
   */
  useFrame(({ clock }) => {
    /**
     * Define various values scoped to frame
     */
    const time = clock.getElapsedTime() * speed
    const { position } = ref?.current?.attributes ?? {}
    /**
     * Loop through all plane positions in order to adjust its z-position
     */
    for (let i = 0; i < position.count; i += 1) {
      position.setZ(i, intensity * Math.sin(i / angle + (time + i) / swell))
    }
    /**
     * Allow position points to be updated
     */
    position.needsUpdate = true
  })

  return (
    <mesh>
      <planeGeometry
        args={[width, height, widthSegments, heightSegments]}
        ref={ref}
      />
      <meshStandardMaterial color={emerald[500]} wireframe />
    </mesh>
  )
}

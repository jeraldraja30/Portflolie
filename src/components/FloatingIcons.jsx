import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Html } from '@react-three/drei'

function Icon3D({ position, icon, color = '#6366f1' }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <group position={position} ref={meshRef}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
      <Html distanceFactor={10} position={[0, 1.5, 0]} center>
        <div style={{
          background: 'rgba(99, 102, 241, 0.2)',
          backdropFilter: 'blur(10px)',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          color: 'white',
          fontSize: '0.8rem',
          whiteSpace: 'nowrap'
        }}>
          {icon}
        </div>
      </Html>
    </group>
  )
}

function FloatingIcons() {
  const icons = ['React', 'Python', 'Java', 'Node.js', 'javascript']

  return (
    <>
      {icons.map((icon, index) => {
        const angle = (index / icons.length) * Math.PI * 2
        const radius = 3
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (index % 2) * 2 - 1

        return (
          <Icon3D
            key={icon}
            position={[x, y, z]}
            icon={icon}
            color={['#61dafb', '#000000', '#0055ff', '#339933', '#3178c6'][index]}
          />
        )
      })}
    </>
  )
}

export default FloatingIcons


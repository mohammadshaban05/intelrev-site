import { Suspense, lazy } from 'react'

// ShaderGradient pulls in three.js + react-three-fiber, so load it lazily
// and keep it purely decorative (non-interactive) behind the hero content.
const ShaderGradientCanvas = lazy(() =>
  import('@shadergradient/react').then((m) => ({ default: m.ShaderGradientCanvas }))
)
const ShaderGradient = lazy(() =>
  import('@shadergradient/react').then((m) => ({ default: m.ShaderGradient }))
)

export default function ShaderHero() {
  return (
    <div className="shader-bg" aria-hidden="true">
      <Suspense fallback={null}>
        <ShaderGradientCanvas
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
          pixelDensity={1}
          fov={40}
        >
          <ShaderGradient
            control="props"
            type="waterPlane"
            color1="#0b0d0c"
            color2="#dfb64c"
            color3="#5ac6b8"
            brightness={1.1}
            grain="on"
            uSpeed={0.16}
            uStrength={1.6}
            uDensity={1.4}
            uFrequency={5.5}
            cDistance={3.2}
            cAzimuthAngle={180}
            cPolarAngle={100}
            cameraZoom={9.1}
            positionX={-0.3}
            positionY={0.1}
            positionZ={0}
            rotationX={50}
            rotationY={0}
            rotationZ={-60}
            reflection={0.1}
          />
        </ShaderGradientCanvas>
      </Suspense>
    </div>
  )
}

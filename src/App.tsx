import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {
  BrightnessContrast,
  EffectComposer,
} from '@react-three/postprocessing';

function App() {
  return (
    <div className="w-dvw h-dvh">
      <Canvas className="w-full h-full">
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="yellow" />
          <OrbitControls />
        </mesh>
        <ambientLight />
        <EffectComposer>
          <BrightnessContrast brightness={0.1} contrast={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;

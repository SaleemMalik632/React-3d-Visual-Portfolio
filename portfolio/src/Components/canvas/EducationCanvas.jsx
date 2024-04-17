import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

import CanvasLoader from "../Loader";

function Model({ isMobile }) {
  const computer = useLoader(GLTFLoader, '/3d_sketchbook_6_-_education_icon.glb');
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='yellow' />
      <spotLight
        position={[20, 30, 30]}
        angle={0.12}
        penumbra={1}
        intensity={6}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={6} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 : 6}  
        position={[-1,-1, 1]}
      />
    </mesh>
  );
}

function App() {

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);



  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 10, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Model isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}


export default App;

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, useAspect } from "@react-three/drei";
import { fragment, vertex } from "@/shaders/Shader";
import { useControls } from "leva";

const Model = () => {
  const image = useRef();
  const texture = useTexture(
    "https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719805828/875_sfafe7.jpg"
  );
  const { width, height } = texture.image;
  const scale = useAspect(width, height, 0.3);

  const isDevelopment = process.env.NODE_ENV === "development";
  const controls = useControls(
    isDevelopment
      ? {
          amplitude: { value: 0.25, min: 0, max: 2, step: 0.1 },
          waveLength: { value: 5, min: 0, max: 20, step: 0.5 },
        }
      : {}
  );

  const amplitude = isDevelopment ? controls.amplitude : 0.25;
  const waveLength = isDevelopment ? controls.waveLength : 5;

  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
    uTexture: { value: texture },
  });

  useFrame(() => {
    image.current.material.uniforms.uTime.value += 0.04;
    image.current.material.uniforms.uAmplitude.value = amplitude;
    image.current.material.uniforms.uWaveLength.value = waveLength;
  });

  return (
    <mesh ref={image} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        wireframe={false}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};

export default Model;

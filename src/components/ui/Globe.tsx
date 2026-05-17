import { useEffect, useRef, useState } from "react";

const SIZE = 2100;

export default function Globe() {
  const globeRef = useRef<any>(null);
  const [GlobeGL, setGlobeGL] = useState<any>(null);

  useEffect(() => {
    import("react-globe.gl").then((m) => setGlobeGL(() => m.default));
  }, []);

  const handleReady = () => {
    if (!globeRef.current) return;
    const ctrl = globeRef.current.controls();
    ctrl.autoRotate      = true;
    ctrl.autoRotateSpeed = 0.6;
    ctrl.enableZoom      = false;
    ctrl.enablePan       = false;
    ctrl.enableRotate    = true; // draggable
    // Vue "planète depuis l'espace" — altitude haute = globe entier visible
    globeRef.current.pointOfView({ lat: 20, lng: -75, altitude: 2.2 }, 0);
  };

  if (!GlobeGL) return null;

  return (
    <GlobeGL
      ref={globeRef}
      width={SIZE}
      height={SIZE}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      atmosphereColor="#3b82f6"
      atmosphereAltitude={0.18}
      onGlobeReady={handleReady}
      pointsData={[]}
      arcsData={[]}
      labelsData={[]}
    />
  );
}

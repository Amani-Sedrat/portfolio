import React, { useEffect, useRef } from "react";

const Ball = ({ imgUrl }) => {
  return (
    <div style={{ position: "relative", width: "100px", height: "100px", borderRadius: "50%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: `url(${imgUrl})`, backgroundSize: "cover", borderRadius: "50%" }}></div>
    </div>
  );
};

const BallCanvas = ({ icon }) => {
  const rendererRef = useRef(null);

  useEffect(() => {
    const handleContextLost = (event) => {
      console.log('WebGL context lost', event);
      // Handle WebGL context lost event
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored');
      // Handle WebGL context restored event
    };

    const cleanup = () => {
      const canvas = rendererRef.current;
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };

    const renderer = document.createElement("canvas");
    rendererRef.current = renderer;

    const canvas = renderer;
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return cleanup;
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Ball imgUrl={icon} />
    </div>
  );
};

export default BallCanvas;

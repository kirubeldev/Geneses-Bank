"use client";
import React, { useEffect, useState } from "react";

const generateRandomHeight = (min, max) => Math.random() * (max - min) + min;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Chart = ({ numBars }) => {
  const minHeight = 30; // Minimum height for all bars
  const maxHeight = 90; // Maximum height for all bars
  const initialMinHeight = 70; // Minimum height for bars on page load
  const initialMaxHeight = 110; // Maximum height for bars on page load

  const generateUniqueHeights = () => {
    return Array.from({ length: numBars }, () => ({
      min: minHeight,
      max: generateRandomHeight(minHeight, maxHeight),
    }));
  };

  const generateInitialHeights = () => {
    return Array.from({ length: numBars }, () => 
      generateRandomHeight(initialMinHeight, initialMaxHeight)
    );
  };

  const [heights, setHeights] = useState(generateInitialHeights());
  const [targetHeights, setTargetHeights] = useState(generateUniqueHeights());

  useEffect(() => {
    const startAnimation = () => {
      let animationFrameId;
      let startTime;

      const animate = (time) => {
        if (!startTime) startTime = time;
        const elapsedTime = time - startTime;

        const t = Math.min(elapsedTime / 2000, 1); // Animation duration
        const newHeights = targetHeights.map(({ min, max }, index) => {
          const variation = Math.random() * 0.5; // Random variation for each bar
          return heights[index] + (max - heights[index]) * (t + variation * (Math.random() - 0.5));
        });

        setHeights(newHeights);

        if (elapsedTime < 2000) { // Animation time
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            setTargetHeights(generateUniqueHeights());
            startAnimation();
          }, 2000); // Pause before next animation
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    };

    startAnimation();
  }, [targetHeights]);

  return (
    <div className="mt-12" style={styles.barchart}>
      {heights.map((height, index) => (
        <div key={index} style={{ ...styles.bar, height: `${height}%` }} />
      ))}
    </div>
  );
};

const styles = {
  barchart: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: "300px",
    margin: "10px 0", // Space between charts
  },
  bar: {
    width: "20px",
    backgroundColor: "#321018",
    transition: "height 2s cubic-bezier(0.42, 0, 0.58, 1)", // Smooth and slow at both extremes
  },
};

const App = () => {
  const { width } = useWindowSize();

  // Determine the number of bars based on the screen width
  const numBars = width <= 480 ? 10 : width <= 1024 ? 20 : 50;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Chart numBars={numBars} />
    </div>
  );
};

export default App;

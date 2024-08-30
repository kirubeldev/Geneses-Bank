"use client"
import { useEffect } from 'react';
import paper from 'paper';
import { TimelineLite, Power1 } from 'gsap';

const WaveAnimation = () => {
    useEffect(() => {
        // Set up Paper.js with the canvas
        const canvas = document.getElementById('myCanvas');
        paper.setup(canvas);

        // Create a Paper.js Path to draw a line
        const path = new paper.Path({
            strokeColor: '#471722',
            strokeWidth: 1
        });

        // Define points for a longer line with smooth curves
        const points = [];
        const numPoints = 60; // Increased number of points
        const amplitude = 50; // Amplitude of the wave
        const segmentLength = 30; // Distance between points

        for (let i = 0; i < numPoints; i++) {
            points.push(new paper.Point(i * segmentLength, 250 + amplitude * Math.sin(i * 0.2)));
        }
        path.addSegments(points);

        // Create a small circle at the end of the path
        const endCircle = new paper.Path.Circle({
            center: points[points.length - 1],
            radius: 8,
            fillColor: '#471722'
        });

        // Create Timelines for each point
        const timelines = points.map((point, index) => {
            const tl = new TimelineLite({
                delay: index * 0.1, // Adjust delay for smoother animation
                onComplete: function () {
                    this.restart();
                }
            });
            tl.to(path.segments[index].point, 2, { y: "+=30", ease: Power1.easeInOut }); // Slower animation
            tl.to(path.segments[index].point, 2, { y: "-=30", ease: Power1.easeInOut });
            return tl;
        });

        // Redraw canvas every frame
        paper.view.onFrame = () => {
            path.smooth({ type: 'continuous' });
            // Update the position of the circle
            endCircle.position = path.lastSegment.point;
        };
    }, []);

    return (
        <canvas
            id="myCanvas"
            style={{
                width: '100%',
                height: "400px",
               
            }}
        />
    );
};

export default WaveAnimation;

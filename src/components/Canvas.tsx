import React, { useRef, useEffect } from "react";
import { random } from "lodash";
import { loadImage, generatePosition, PositionData } from "../engine";
import { IMAGES } from "../engine/mock";

const MAX_ROTATION = Math.PI * 0.05;

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    async function drawImages() {
      if (canvasRef.current === null) return;
      const { width, height } = canvasRef.current;

      const ctx = canvasRef.current.getContext("2d");
      if (ctx === null) return;

      const imagesPromises = IMAGES.map(loadImage);
      const images = await Promise.all(imagesPromises);

      const positions: PositionData[] = [];

      images.forEach((image, i) => {
        const scale = random(1, 2);

        const imageWidth = image.width * scale;
        const imageHeight = image.height * scale;

        let genPos = () =>
          generatePosition(width, height, imageWidth, imageHeight);

        let position = genPos();

        const rotation = random(-MAX_ROTATION, MAX_ROTATION);

        ctx.translate(position.x, position.y);
        ctx.rotate(rotation);
        ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
        ctx.rotate(-rotation);
        ctx.translate(-position.x, -position.y);

        positions.push(position);
      });
    }

    drawImages();
  });

  return <canvas width="640" height="480" ref={canvasRef}></canvas>;
}

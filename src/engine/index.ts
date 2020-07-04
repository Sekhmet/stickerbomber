import { random } from "lodash";

export type PositionData = {
  x: number;
  y: number;
};

export function generatePosition(
  width: number,
  height: number,
  imageWidth: number,
  imageHeight: number
): PositionData {
  return {
    x: random(0, width) - imageWidth / 2,
    y: random(0, height) - imageHeight / 2,
  };
}

export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;

    image.src = url;
  });
}

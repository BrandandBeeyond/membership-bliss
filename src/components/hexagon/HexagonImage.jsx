import React from 'react';
import { Svg, Defs, ClipPath, Polygon, Image } from 'react-native-svg';

const HexagonImage = ({ uri, size }) => {
  const h = size;
  const w = size;

  const inset = 0.95; 

  const left = w * inset;
  const right = w * (1 - inset);

  const points = `
    ${w / 2},0
    ${right},${h * 0.25}
    ${right},${h * 0.75}
    ${w / 2},${h}
    ${left},${h * 0.75}
    ${left},${h * 0.25}
  `;

  return (
     <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{elevation: 15}}>
      <Defs>
        <ClipPath id="hex">
          <Polygon points={points} />
        </ClipPath>
      </Defs>

      <Image
        href={uri}
        width={w}
        height={h}
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#hex)"
      />
    </Svg>
  );
};

export default HexagonImage;

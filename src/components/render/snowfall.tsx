'use client';

import RSnowfall from 'react-snowfall';

export default function Snowfall() {
  return (
    <RSnowfall
      style={{ position: 'fixed' }}
      speed={[0.25, 0.75]}
      wind={[-0.5, 0.5]}
      snowflakeCount={100}
      color="#fffa"
    />
  );
}

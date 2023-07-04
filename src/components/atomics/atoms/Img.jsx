import React from 'react';

export default function Img({
  src,
  onError,
  alt,
  width,
  height,
  style,
  ...props
}) {
  return (
    <div>
      <img
        src={src}
        onError={onError}
        alt={alt}
        width={width}
        height={height}
        style={style}
        {...props}
      />
    </div>
  );
}

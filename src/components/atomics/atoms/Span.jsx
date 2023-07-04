import React from 'react';

export default function Span({ children, style }) {
  return <span style={{ ...style }}>{children}</span>;
}

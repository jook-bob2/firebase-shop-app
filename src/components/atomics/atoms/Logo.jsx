import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to={'/'}>
      <img src={'/public/logo192.png'} width={64} />
    </Link>
  );
}

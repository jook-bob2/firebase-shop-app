import { useUser } from '@src/core/store/providers/UserProvider';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdmProductMngtWriteDomain() {
  const { isAdmin } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate(-1);
    }
  }, []);

  if (!isAdmin) {
    return <></>;
  }

  return (
    <section>
      <header>
        <h1>관리자 상품 등록 페이지</h1>
      </header>
    </section>
  );
}

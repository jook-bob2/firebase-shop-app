import React from 'react';
/*
 * Provider들을 배열로 받아 Element를 생성하고 자식 Provider들을 반환 한다.
 */
export function ProviderCreate({ contexts, children }) {
  return (
    <>
      {contexts.reduce(
        (prev, context) => React.createElement(context, {}, prev),
        children,
      )}
    </>
  );
}

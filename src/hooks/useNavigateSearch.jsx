import { createSearchParams, useNavigate } from 'react-router-dom';

/**
 * @desc search parameters 전달
 * @returns
 */
export const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname, params) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` });
};

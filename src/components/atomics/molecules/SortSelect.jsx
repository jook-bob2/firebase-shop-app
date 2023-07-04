import React, { useEffect } from 'react';
import Select from '../atoms/Select';
import SORT_TYPES from '@src/constants/SORT_TYPES';

export default function SortSelect({ options, setOptions, value, setValue }) {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const newOptions = SORT_TYPES.map((sort) => ({
      name: sort.name,
      value: sort.typeNum,
    }));
    setOptions([...newOptions]);
    setValue(newOptions[0].value);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Select options={options} onChange={onChange} value={value}></Select>
    </div>
  );
}

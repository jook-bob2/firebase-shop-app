import React from 'react';

export default function Select({
  value,
  onChange,
  options = [{ value: 'value', name: '값' }],
}) {
  return (
    <div>
      <select onChange={onChange} value={value}>
        {options?.length > 0 &&
          options.map((opt) => <option value={opt.value}>{opt.name}</option>)}
      </select>
    </div>
  );
}

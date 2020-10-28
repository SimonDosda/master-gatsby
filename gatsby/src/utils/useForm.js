import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValues(e) {
    let { name, value, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    setValues({ ...values, [name]: value });
  }

  return { values, updateValues };
}

import { useState } from 'react';

import './styles.css'

const Switch = (props) => {
  const [active, setActive] = useState(false)
  return (props.render({active, setActive}));
}

export default Switch;

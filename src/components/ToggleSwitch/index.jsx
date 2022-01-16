import React, { useState } from "react";

import "./styles.css";

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" >  </span>
    </label>
  );
}
export default ToggleSwitch;
import { useState } from "react";


function Footer() {
  const [cnt, setCnt] = useState(0);
  const incCounter = () =>{
    setCnt(cnt+1);
  }
  return (
    <div>
      Count: {cnt}
      <br/>
      <button onClick={incCounter}>Hit Me</button>
    </div>
  );
}

export default Footer;

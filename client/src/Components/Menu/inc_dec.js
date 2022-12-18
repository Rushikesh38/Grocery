import { useState } from "react";

function Contact() {
    const [amount, setAmount] = useState(1);
    const setInc = () => {
        setAmount(amount + 1);
    };

    const setDec = () => {
        amount > 1 && setAmount(amount - 1);
    };

    return (
      <div>
        <button className="btn btn-warning" onClick={setDec}>-</button>
        {amount}
        <button className="btn btn-success" onClick={setInc}>+</button>
      </div>
    );
  }
  
  export default Contact;
  
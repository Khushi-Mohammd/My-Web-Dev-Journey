import { useState } from "react";

export default function LotteryGame() {
  const [ticket, setTicket] = useState([0, 0, 0]);

  const generateTicket = () => {
    const newTicket = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];

    setTicket(newTicket);
  };

  return (
    <div>
      {ticket[0] + ticket[1] + ticket[2] === 15 ? (
        <h2>Lottery 'Congratulations, you won!'</h2>
      ) : (
        <h2>Lottery</h2>
      )}

      <h4>Lottery Ticket = {ticket}</h4>
      <button onClick={generateTicket}>Get New Ticket</button>
    </div>
  );
}

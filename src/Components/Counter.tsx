import React, { ChangeEvent, FormEvent, useState } from "react";

interface user {
  name?: string;
  job?: string;
}

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState<user | null>(null);
  const handleIncrease = (): void => {
    setCounter(counter + 1);
  };
  const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
        name: 'Adan',
        job: 'Dev'
    }
    setUser(userData)
  };
  const handleInputChange = (e:ChangeEvent<HTMLInputElement>):void => {

  }
  return (
    <div>
      <h2>This is Counter</h2>
      <h2>{counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Counter;

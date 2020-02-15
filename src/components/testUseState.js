import React, { useState } from "react";

const me = {
  name: "kris",
  age: 38
};

export default function TestUseState() {
  const [obj, incMyAge] = useState(me);
  return (
    <div>
      <h2>count: {obj.age} </h2>
      <h2>name: {obj.name}</h2>
      <button onClick={() => incMyAge({...obj, age: obj.age + 1 })}></button>
    </div>
  );
}

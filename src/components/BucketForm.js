import React, { useState } from "react";
import BucketList from "./BucketList";

function BucketForm() {
  // create userinput state and a function to change it
  const [userInput, setUserInput] = useState("");
  const [bucketList, setBucketList] = useState([]);

  // method to change the state when the user types in the input box
  const handleChange = (e) => {
    const userObject = {
      id: Math.random(Math.floor() * 100),
      text: e.target.value,
    };
    setUserInput(userObject);
  };

  // method to change state by adding userInput to bucketList
  const handleSubmit = (e) => {
    e.preventDefault();
    setBucketList([...bucketList, userInput]);
  };

  // method to delete individual items
  const deleteItem = (id) => {
    const newBucketList = [...bucketList].filter((item) => item.id !== id);
    setBucketList = newBucketList;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type your item here" onChange={handleChange}></input>
        <button>add item</button>
      </form>
      {/* create a container to hold and render bucket list items */}
      <BucketList data={bucketList} deleteItem={deleteItem} />
    </div>
  );
}

export default BucketForm;

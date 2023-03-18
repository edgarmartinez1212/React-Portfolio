import React from "react";

function BucketList(props) {
  return (
    <ul>
      {props.data.map((result) => (
        <li key={result.id}>
          {result}
          <button onClick={props.deleteItem(result.id)}>delete</button>
        </li>
        // button to delete individual items
      ))}
    </ul>
  );
}

export default BucketList;

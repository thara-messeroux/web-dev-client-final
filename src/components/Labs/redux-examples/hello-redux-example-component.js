import React from 'react'
import { useSelector } from "react-redux";

const HelloReduxExampleComponent = () => {
 const message = useSelector((state) => state.Hello.message);
  console.log(message)
    return (
    <div>{message}</div>
  )
}

export default HelloReduxExampleComponent
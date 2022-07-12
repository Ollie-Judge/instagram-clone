import { useState } from "react";
import { signUp } from "../utils";

const SignOrLog = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    await signUp(username, email, password, setter);
  };

  return (
    <form onSubmit={submitHandler}>
      <input onChange={(e) => setUsername(e.target.value)} />
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignOrLog;

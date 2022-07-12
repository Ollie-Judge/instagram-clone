export const signUp = async (username, email, password, setter) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      method: "POST", //HTTP Verb
      headers: { "Content-Type": "application/json" }, //sending JSON data instructions
      body: JSON.stringify({
        username,
        email,
        password,
      }), //body that has been turned into JSON with stringify
    });
    const data = await response.json();
    setter(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

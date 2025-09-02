export async function RegisterPost(email, username, password) {
  const id = Math.random() * 100;

  const res = await fetch(
    "https://backend-dusky-eight-18.vercel.app/Register",
    {
      method: "POST",
      headers: {
        "Content-Type": "applicatio/json",
        authorization: "dia",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    }
  );
  return res.json();
}

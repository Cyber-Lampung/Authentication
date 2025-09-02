export async function RegisterPost(email, username, password) {
  const res = await fetch(
    "https://backend-dusky-eight-18.vercel.app/Register",
    {
      method: "POST",
      headers: {
        "Content-Type": "applicatio/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    }
  );
  console.log(res);
}

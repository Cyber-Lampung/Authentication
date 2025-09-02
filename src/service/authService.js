export async function RegisterPost(email, username, password) {
  const res = await fetch(
    "https://backend-dusky-eight-18.vercel.app/Register",
    {
      method: "POST",
      headers: { "Content-Type": "applicatio/json", authorization: "dia" },
      body: JSON.stringify({ email, username, password }),
    }
  );
  return res.json();
}

export async function LoginAuth(email, password) {
  const res = await fetch("https://backend-dusky-eight-18.vercel.app/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "dia",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  console.log(res);
}

export const BASE_URL = "https://gentle-woodland-79828.herokuapp.com/api";

export async function registerUser(usernameValue, passwordValue) {
  try {
    const response = await fetch(`https://localhost:3000/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameValue,
        passwordValue,
      }),
    });
    const { token, user } = await response.json();

    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
  } catch (e) {
    throw e;
  }
}

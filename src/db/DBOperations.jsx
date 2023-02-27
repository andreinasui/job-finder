import { dbAPI } from "./constants";

export const fetchQuestions = async () => {
  return fetch(dbAPI.LIST_QUESTIONS)
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch data for that resource");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const saveUserToDB = async (user) => {
  fetch(dbAPI.SAVE_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not save user!");
      }
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      // console.log("Saved to DB!");
    });
};

import addUserQuery from "../db/queries.js";

async function signupModel(userData) {
  try {
    const result = await addUserQuery(userData);
    return result;
  } catch (err) {
    console.error(`Failed to add new User`, err);
  }
}

export default signupModel;

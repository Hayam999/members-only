import bcrypt from "bcrypt";
import { addUserQuery } from "../db/queries.js";

async function signupModel(userData) {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const result = await addUserQuery({
    ...userData,
    password: hashedPassword,
  });

  return result;
}

export default signupModel;

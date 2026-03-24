import addUser from "../models/signupModel.js";

async function signupController(req, res, next) {
  try {
    await addUser(req.validatedData);
    req.session.user = req.validatedData;
    next();
  } catch (err) {
    console.error(`Failded to sign you up`, err);
  }
}

export default signupController;

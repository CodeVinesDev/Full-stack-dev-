import { User } from "../models/User.modle";
export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || (!password && password.length >= 8)) {
      throw new Error("plese filed all form");
    }

    const exitUser = await User.find({ email });
    if (exitUser) {
      res.status(404).json("user areday exists plese login ");
    }

    const newUser = {
      email: email,
      password: password,
    };

    await User.create(newUser);
    return res.status(200).json("user susecfuly signup");
  } catch (error) {
    throw new Error("somthing went wrong");
  }
};
export const login = (req, res) => {};
export const logout = (req, res) => {};

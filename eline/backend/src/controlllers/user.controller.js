export const signup = (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("plese filed all form");
    }
  } catch (error) {}
};
export const login = (req, res) => {};
export const logout = (req, res) => {};

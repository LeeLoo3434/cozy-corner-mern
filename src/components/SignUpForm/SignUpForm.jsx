import { useState } from "react";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await signUp(formData);
      props.setUser(user);
    } catch (err) {
      console.log(err);
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <form
      className="form p-5 rounded"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-5">SIGN UP</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Confirm</label>
        <input
          type="password"
          name="confirm"
          placeholder="Confirm password"
          className="form-control"
          value={formData.confirm}
          onChange={handleChange}
          required
        />
        <button
          className="btn form-control rounded bg-transparent border-dark mt-5 "
          type="submit"
          disabled={disable}
        >
          SIGN UP
        </button>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </form>
  );
}

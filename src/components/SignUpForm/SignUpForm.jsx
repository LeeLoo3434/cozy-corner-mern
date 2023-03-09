import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch (err) {
      console.log(err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <form
        className="form p-5 rounded"
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <h3 className="mb-5">SIGN UP</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleChange}
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
            value={this.state.email}
            onChange={this.handleChange}
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
            value={this.state.password}
            onChange={this.handleChange}
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
            value={this.state.confirm}
            onChange={this.handleChange}
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
        <p className="error-message">&nbsp;{this.state.error}</p>
      </form>
    );
  }
}
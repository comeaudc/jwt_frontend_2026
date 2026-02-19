import { useState } from "react";
import { useAuth } from "../../context/authContext/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setNewUser }) => {
  const { signUp } = useAuth();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      alert("Passwords dont match");
    } else {
      await signUp(formData);

      // Navigate to dashboard page
      nav('/dashboard')
    }
  }

  const handleClick = () => {
    setNewUser(false);
  };

  return (
    <div className="forms">
      <h2>SignUp</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name1">Name: </label>
        <input
          type="text"
          id="name1"
          name="name"
          placeholder="First and Last Name"
          onChange={handleChange}
          value={formData.name}
        />
        <label htmlFor="email1">Email: </label>
        <input
          type="email"
          id="email1"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <label htmlFor="password1">Password: </label>
        <input
          type="password"
          id="password1"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          minLength="6"
        />
        <input
          type="password"
          id="password2"
          name="password2"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formData.password2}
          minLength="6"
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;

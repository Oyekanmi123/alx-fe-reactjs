import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", { username, email, password });
      // Simulate API call here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
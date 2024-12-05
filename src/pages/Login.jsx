import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import jwt_decode from "jwt-decode";
import fetchData from "../helper/apiCall";

function Login() {
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const { email, password, role } = formDetails;

    // Input validation
    if (!email || !password) {
      return toast.error("Email and password are required");
    } else if (!role) {
      return toast.error("Please select a role");
    } else if (role !== "Admin" && role !== "Doctor" && role !== "Patient") {
      return toast.error("Please select a valid role");
    } else if (password.length < 5) {
      return toast.error("Password must be at least 5 characters long");
    }

    try {
      const response = await toast.promise(
        fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, role }),
        }),
        {
          pending: "Logging in...",
          success: "Login successful",
          error: "Unable to login user",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      const decodedToken = jwt_decode(data.token);
      dispatch(setUserInfo(decodedToken.userId));
      setUserRole(role);

      await getUser(decodedToken.userId, role);
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
    }
  };

  const getUser = async (id, role) => {
    try {
      const temp = await fetchData(`/user/getuser/${id}`);
      dispatch(setUserInfo(temp));

      if (role === "Admin") {
        navigate("/dashboard/home");
      } else if (role === "Patient") {
        navigate("UserNav/home");
      } else {
        navigate("doctors/home");
      }
    } catch (error) {
      toast.error("Unable to fetch user details");
    }
  };

  return (
    <>
      <Navbar />
      <section className="register-section flex-center">
        <div className="register-container flex-center">
          <h2 className="form-heading">Sign In</h2>
          <form onSubmit={formSubmit} className="register-form">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formDetails.email}
              onChange={inputChange}
            />
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={formDetails.password}
              onChange={inputChange}
            />
            <select
              name="role"
              className="form-input"
              value={formDetails.role}
              onChange={inputChange}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
            </select>
            <button type="submit" className="btn form-btn">
              Sign In
            </button>
          </form>
          <NavLink className="login-link" to={"/forgotpassword"}>
            Forgot Password
          </NavLink>
          <p>
            Not a user?{" "}
            <NavLink className="login-link" to={"/register"}>
              Register
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;

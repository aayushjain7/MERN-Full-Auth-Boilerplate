import React, { useState } from "react";
import "../../styles/RegisterScreen.css";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
	const [username, setUsername] = useState("");

	return (
		<div className="register-screen">
			<form className="register-screen__form">
				<h3 className="register-screen__title">Register</h3>
				<div className="form-group">
					<label htmlFor="name">Username:</label>
					<input
						type="text"
						required
						id="name"
						placeholder="Enter Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default RegisterScreen;

import React from "react"
import { Formik, Form } from "formik"
import { FaPaintBrush } from "react-icons/fa"
import LoginSchema from "../validations/login.validations"
import TextInput from "./TextInput"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"


const SignUpForm = () => {

    const [name, setname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordConfirmation, setpasswordConfirmation] = useState("");
    const [carNumber, setCarNumber] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
	// const location = useLocation()
	const navigate = useNavigate()
	// const from = location.state?.from?.pathname || "/"

	function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		fetch("/users", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({ name, password, passwordConfirmation, email}),
		}).then((r) => {
		  setIsLoading(false);
		  if (r.ok) {
			r.json().then((user) => console.log(user));
			navigate("/slots")
		  } else {
			r.json().then((err) => console.log(err.errors));
		  }
		});
	  }

	return (
		
			<div className='w-3/4'>

			<h1 className='w-full flex items-center p-2 text-red-700 text-4xl font-bold'>
					Sign up
				</h1>
				<p className="py-4" >I already have an account? <span className="text-red-700">Log in</span></p>
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					validationSchema={LoginSchema}
					onSubmit={async (values, { setSubmitting }) => {
						console.log(values)
						setSubmitting(false)
					}}
					// onSubmit={handleSubmit}
				>
					<Form>
						<TextInput
							label='Name'
							name='name'
							type='text'
							placeholder='Enter your name'
							value={name}

							onChange={(e) => setname(e.target.value)}
						/>
						<TextInput
							label='Email Address'
							name='email'
							type='text'
							placeholder='example@gmail.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}

						/>
						<TextInput
							label='Password'
							name='password'
							type='password'
							placeholder='Enter Password'
							value={password}

							onChange={(e) => setPassword(e.target.value)}

						/>
						<TextInput
							label='confirm Password'
							name='password'
							type='password'
							placeholder='confirm Password'
							value={passwordConfirmation}
							onChange={(e) => setpasswordConfirmation(e.target.value)}

						/>
						{/* <div className='w-full flex items-center justify-evenly py-12'> */}
							<button className="px-4 py-1 text-lg font-light shadow-md rounded-full">Sign up with Google</button>
							<button className="px-4 py-1 text-lg font-light shadow-md rounded-full">Sign up with Facebook</button>
						
						<div className="w-full flex items-center justify-center">
						<button
							className='px-5 py-2 bg-red-700 rounded-full text-white text-xl'
							type='submit'
							onClick={handleSubmit}
						>
							Create Account
						</button>
						</div>
					</Form>
				</Formik>
			</div>
	
	)
}

export default SignUpForm
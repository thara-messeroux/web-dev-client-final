
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {

	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [dob, setDob] = useState('');
	const [college, setCollege] = useState('');

	async function registerUser(event) {
		event.preventDefault();
		console.log(name, email, password);
  // "proxy": "http://localhost:8080",
		// 	const response = await fetch('https://web-dev-final.herokuapp.com/api/register', {
		// 		 method: 'POST',
		// 		 headers: {
		// 			 'content-type': 'application/json'
		// 		 },
		// 		 body: JSON.stringify({
		// 			 name,
		// 			 username,
		// 			 email,
		// 			 password,
		// 			 phone,
		// 			 dob,
		// 			 college
		// 		 })
		// })
		// const options = {
		// 	method: 'POST',
		// 	headers: {
		// 		 'content-type': 'application/json'
		// 				 },
		// 	body: JSON.stringify({"email":"tharamesseroux@gmail.com","username":"Thatoue","phone":"12345","dob":"091795","college":"NEU"}),
		// };

		// fetch('http://localhost:8080/twitter/api/users/', options)
		// 	.then(response => response.json())
		// 	.then(response => console.log(response))
		// 	.catch(err => console.error(err));

		// if(data.status === 'ok'){
		// 	alert('User registered successfully');
		// 	navigate('/login');
		// } else{
		// 	alert('Error registering user');
		// }

		const options = {
			method: 'POST',
			url: 'http://localhost:8080/twitter/api/users/',
			data: {
			  email: email,
			  username: username,
			  phone: phone,
			  dob: dob,
			  college: college
			}
		  };
		  
		  axios.request(options).then(function (response) {
			console.log(response.data);
		  }).catch(function (error) {
			console.error(error);
		  });
	}

	return (
		<div className="App">
			<h1>Register</h1>
			<form onSubmit={registerUser} className="form mb-2">
				{/* <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className='form-control mb-2'/> */}
				<input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className='form-control mb-2' />
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className='form-control mb-2' />
				{/* <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className='form-control mb-2'/> */}
				<input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className='form-control mb-2' />
				<input value={dob} onChange={(e) => setDob(e.target.value)} type="text" placeholder="DOB" className='form-control mb-2' />
				<input value={college} onChange={(e) => setCollege(e.target.value)} type="text" placeholder="College" className='form-control mb-2' />
				<input type="submit" value="Register" className='btn btn-primary' />
			</form>
		</div>
	);
}

export default Register;
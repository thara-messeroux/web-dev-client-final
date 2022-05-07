
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [dob, setDob] = useState('');
	const [college, setCollege] = useState('');

	async function registerUser(event){
		event.preventDefault();
		console.log(name, email, password);
		const response = await fetch('http://localhost:4000/api/register', {
			 method: 'POST',
			 headers: {
				 'content-type': 'application/json'
			 },
			 body: JSON.stringify({
				 name,
				 username,
				 email,
				 password,
				 phone,
				 dob,
				 college
			 })
	})
	const data = await response.json();
	console.log(data);

	if(data.status === 'ok'){
		alert('User registered successfully');
		navigate('/login');
	} else{
		alert('Error registering user');
	}
}

	return (
		<div className="App">
			<h1>Register</h1>
			<form onSubmit={registerUser} className="form mb-2">
				<input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className='form-control mb-2'/>
				<input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className='form-control mb-2'/>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className='form-control mb-2'/>
				<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className='form-control mb-2'/>
				<input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className='form-control mb-2'/>
				<input value={dob} onChange={(e) => setDob(e.target.value)} type="text" placeholder="DOB" className='form-control mb-2'/>
				<input value={college} onChange={(e) => setCollege(e.target.value)} type="text" placeholder="College" className='form-control mb-2'/>
				<input type="submit" value="Register" className='btn btn-primary'/>
			</form>
		</div>
	);
}

export default Register;
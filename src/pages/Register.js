
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  // usestate and useffect are react hooks
  // usestate is used to keep track of changing variables
  // useeffect is generally used for ajax calls
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(e){
    e.preventDefault();
    console.log(name, email, password);
    const response = await fetch('https://web-dev-server-final.herokuapp.com/api/register', {
       method: 'POST',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify({
         name,
         username,
         email,
         password
       })
  })
  const data = await response.json();
  console.log(data);

  if(data.status === 'ok'){
    alert('User registered successfully');
    navigate('/login');
  } else{
    alert("Error registering user")
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
        <input type="submit" value="Register" className='btn btn-primary'/>
      </form>
    </div>
  );
}

export default Register;
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import WhoToFollowList from '../components/Tuiter/WhoToFollowList';

function Login() {

  const navigate = useNavigate();

  const [_id, set_id] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(e){
    e.preventDefault();
    console.log(username, password);
    localStorage.setItem('username', username);

    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        _id,
        username,
        password
      })
    })

    const data = await response.json();
    
    if(data.token){
      console.log(data.token)
      localStorage.setItem('token', data.token);
      localStorage.setItem('_id', data.user._id);
      alert('User logged in successfully');
      navigate('/home');
    } else{
      alert('Invalid username or password');
    }
}

  return (
    <div className="Login">
      <h2 className='mb-2'>Login</h2>
      <form onSubmit={loginUser} className="form">
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Username" className='form-control mb-2' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className='form-control mb-2'/>
        <input type="submit" value="Login" className='btn btn-primary'/>
      </form>
    </div>
  );
}

export default Login;
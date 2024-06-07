// import { toast } from "react-toastify"
import { useContext } from "react";
import "./login.css";
import { Context } from "../../context/Context";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const createUser = async (nick, fullName) => {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({
        nickname: nick,
        fullName: fullName
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target)
    const { nick, fullName } = Object.fromEntries(formData)
    console.log(nick, fullName);
    user.nick = nick;
    createUser(nick, fullName);
    navigate('/chat');
  }

  return (
    <div className="login">
      <div>
        <div>
          <h2>Bienvenido</h2>
        </div>
        <div>
          <div className="separator">
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="Tu Nick" name="nick" />
              <input type="text" placeholder="Tu Nombre" name="fullName" />
              <button className="button">Sing In</button>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Login

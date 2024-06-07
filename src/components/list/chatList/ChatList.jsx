import "./chatList.css";

const RenderUser = (props) => {
  return (
    <div className="item">
      <img src="./avatar.png" alt="" />
      <div className="texts">
        <span>{props.nick}</span>
      </div>
    </div>
  );
}

const ChatList = (props) => {
  
  const users = props.users;

  return (
    <div className="chatList">
      <div className="search">
         <div className="searchBar">
          <p>Usuarios Conectados</p>
        </div> 
      </div>
      {users.map((user) => <RenderUser key={user.id} nick={user.nick} />)}

    </div>
  );
};

export default ChatList;

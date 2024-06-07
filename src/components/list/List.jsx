import ChatList from "./chatList/ChatList"
import "./list.css"


const List = (props) => {
  return (
    <div className="list">
      <ChatList users={props.users} />
    </div>
  )
}

export default List

import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
    const list = friends.map(friend => {
        const id = "id" + Math.random().toString(16).slice(2);
        return (
          <li key={id} className={css.item}>
            <span className="status" style={friend.isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        );
    });
    return <ul className={css.friendList}>{list}</ul>
}
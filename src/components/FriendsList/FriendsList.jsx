import FriendListItem from "./FriendsListItem";
import css from "./friends.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

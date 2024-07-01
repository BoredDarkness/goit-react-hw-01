import "./App.css";
import Profile from "./Profile/Profile";
import userData from "./userData.json";
import FriendsList from "./FriendsList/FriendsList";
import friends from "./friends.json";
import TransactionHistory from "./TransacionHistory/TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

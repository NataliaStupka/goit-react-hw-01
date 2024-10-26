import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './assets/userData.json'; //Profile
import friends from './assets/friendsData.json'; //FriendList
import transactions from './assets/transactionHistoryData.json'; //TransactionHistory

function App() {
  return (
    <div>
      {/* 1 завдання */}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      {/* 2 завдання */}
      <FriendList items={friends} />

      {/* 3 завдання */}
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

import './App.css';

import data from "./data/data.json";
import friends from "./data/friends.json";
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';


function App() {
  return (
    <>
      <Statistics title="UPLOAD STATS" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;

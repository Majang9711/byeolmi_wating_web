// src/App.jsx

// 💡 새로 만든 Hook을 import 합니다.
import useLocalStorage from './hooks/useLocalStorage'; 
import WaitingForm from './components/WaitingForm';
import WaitingList from './components/WaitingList';
import './App.css';

function App() {
  // 💡 useState 대신 useLocalStorage Hook을 사용합니다.
  // 첫 번째 인수는 로컬 스토리지에 저장될 '키'입니다.
  // 두 번째 인수는 로컬 스토리지에 데이터가 없을 때의 초기값 ([])입니다.
  const [waitingList, setWaitingList] = useLocalStorage('waitingListKey', []);

  return (
    <div className="App">
      <h1>대기등록 시스템</h1>
      
      {/* 컴포넌트에는 변동 없이 그대로 전달합니다. */}
      <WaitingForm setWaitingList={setWaitingList} />
      
      <WaitingList 
        waitingList={waitingList} 
        setWaitingList={setWaitingList} 
      />
    </div>
  );
}

export default App;
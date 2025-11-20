//src/components/WaitingList.jsx

const ADMIN_PASSWORD = "4814";

const WaitingList = ({ waitingList, setWaitingList }) => {


  const checkPassword = () => {
    const userInput = prompt("관리자 비밀번호를 입력해주세요:");
    if (userInput === ADMIN_PASSWORD) {
      return true;
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
  };

  const handleRemove = (id) => {
    if (!checkPassword()) {
      return; 
    }
    
    setWaitingList(prevList => prevList.filter(person => person.id !== id));
    alert("대기자가 명단에서 제거되었습니다.");
  };
  

  const handleCall = (name, phoneNumber) => {
   
    if (!checkPassword()) {
      return; 
    }
    
    alert(`[${name}님 호출]\n전화번호: ${phoneNumber}`);
  };

  return (
    <div>
      <h2>현재 대기 인원: {waitingList.length}명</h2>
      {waitingList.length === 0 ? (
        <p>현재 대기자가 없습니다.</p>
      ) : (
        <ol>
          {waitingList.map((person) => (
            <li key={person.id}>
              {person.name} ({person.time}) 
              
              <div style={{ display: 'flex', gap: '8px' }}>
                
                {/* 호출 버튼 */}
                <button 
                    onClick={() => handleCall(person.name, person.phoneNumber)}
                    style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }} 
                >
                    호출
                </button>
                
                {/* 제거 버튼 */}
                <button onClick={() => handleRemove(person.id)}>제거</button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default WaitingList;
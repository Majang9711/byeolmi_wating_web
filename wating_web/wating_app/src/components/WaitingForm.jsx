// src/components/WaitingForm.jsx

import { useState } from 'react';

const WaitingForm = ({ setWaitingList }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력 필드 유효성 검사
    if (name.trim() === '' || phoneNumber.trim() === '') {
      alert("이름과 전화번호를 모두 입력해주세요.");
      return;
    }

    const newPerson = {
      id: Date.now(), // 고유 ID
      name: name,
      phoneNumber: phoneNumber,
      time: new Date().toLocaleTimeString(), // 등록 시간
    };

    // 불변성을 유지하며 상태 업데이트
    setWaitingList(prevList => [...prevList, newPerson]);

    // 입력 필드 초기화
    setName('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          type="tel"
          placeholder="전화번호를 입력하세요."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <button type="submit">대기열 추가</button>
    </form>
  );
};

export default WaitingForm;
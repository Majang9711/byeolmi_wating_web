import { useState, useEffect } from 'react';

/**
 * 로컬 스토리지를 사용하는 커스텀 Hook
 * @param {string} key 로컬 스토리지에 저장될 키 이름
 * @param {any} initialValue 상태의 초기값
 * @returns {[any, Function]} [상태값, 상태 설정 함수]
 */
function useLocalStorage(key, initialValue) {
    // 1. 초기 상태를 로컬 스토리지에서 가져오거나, 없다면 초기값 사용
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            // 저장된 값이 있다면 JSON.parse를 통해 객체/배열로 변환하여 사용
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // 에러 발생 시 (예: 로컬 스토리지에 접근 불가) 초기값 사용
            console.error('로컬 스토리지 로딩 에러:', error);
            return initialValue;
        }
    });

    // 2. value 상태가 변경될 때마다 로컬 스토리지에 저장
    useEffect(() => {
        try {
            // 상태를 문자열로 변환하여 로컬 스토리지에 저장
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('로컬 스토리지 저장 에러:', error);
        }
    }, [key, value]); // key나 value가 변경될 때마다 실행

    return [value, setValue];
}

export default useLocalStorage;
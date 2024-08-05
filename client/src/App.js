import React, { useEffect, useState } from "react"; // React와 관련된 훅(hooks)을 가져옵니다.
import "./App.css"; // 스타일링을 위한 CSS 파일을 가져옵니다.

function App() {
  const [message, setMessage] = useState(""); // 상태(state)를 정의하고 초기값을 빈 문자열로 설정합니다.

  useEffect(() => {
    // 컴포넌트가 마운트될 때 서버로부터 데이터를 가져옵니다.
    fetch("/api/hello") // 서버의 API 엔드포인트에 요청을 보냅니다.
      .then((response) => response.json()) // 응답을 JSON 형식으로 파싱합니다.
      .then((data) => setMessage(data.message)); // 상태를 서버에서 받은 메시지로 업데이트합니다.
  }, []); // 빈 배열을 의존성 배열로 제공하여 이 효과가 컴포넌트 마운트 시 한 번만 실행되도록 합니다.

  return (
    <div className="App">
      <header className="App-header">
        <h1>API 연동</h1>
        <h1>{message}</h1> {/* 상태에 저장된 메시지를 화면에 출력합니다. */}
      </header>
    </div>
  );
}

export default App; // App 컴포넌트를 내보냅니다.

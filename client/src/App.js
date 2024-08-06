import React, { useState } from "react"; // React와 관련된 훅(hooks)을 가져옵니다.
import "./App.css"; // 스타일링을 위한 CSS 파일을 가져옵니다.

function App() {
  const [message, setMessage] = useState(""); // 상태(state)를 정의하고 초기값을 빈 문자열로 설정합니다.

  const fetchMessage = () => {
    // API 데이터를 가져오는 함수를 정의합니다.
    fetch("http://localhost:5000/api/hello") // 서버의 API 엔드포인트에 요청을 보냅니다.
      .then((response) => response.json()) // 응답을 JSON 형식으로 파싱합니다.
      .then((data) => setMessage(data.message)); // 상태를 서버에서 받은 메시지로 업데이트합니다.
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>API 연동</h1>
        <h1>{message}</h1> {/* 상태에 저장된 메시지를 화면에 출력합니다. */}
        <button className="api_req" onClick={fetchMessage}>
          API 데이터 가져오기
        </button>
        {/* 버튼 클릭 이벤트 핸들러를 추가합니다. */}
      </header>
    </div>
  );
}

export default App; // App 컴포넌트를 내보냅니다.

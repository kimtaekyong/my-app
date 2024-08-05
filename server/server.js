const express = require("express"); // Express 모듈을 가져옵니다.
const cors = require("cors"); // cors 모듈을 가져옵니다.
const app = express(); // Express 애플리케이션을 생성합니다.
const port = 5000; // 서버가 실행될 포트 번호를 지정합니다.

app.use(cors()); // 모든 요청에 대해 CORS를 허용합니다.

//req = 요청객체
//res = 응답객체

app.get("/", (req, res) => {
  res.send("연결확인"); // 클라이언트에게 JSON 형식의 응답을 보냅니다.
});

// GET 요청을 처리하는 간단한 API 엔드포인트를 만듭니다.
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from Express!" }); // 클라이언트에게 JSON 형식의 응답을 보냅니다.
});

// 서버를 지정된 포트에서 실행합니다.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // 서버가 성공적으로 실행되었음을 콘솔에 출력합니다.
});

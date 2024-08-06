const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

// Body Parser 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // HTML 폼을 제공하는 라우트
// app.get("/", (req, res) => {
//   res.send(`
//         <html>
//             <body>
//                 <h1>Submit Data</h1>
//                 <form action="/api/data" method="post">
//                     <label for="name">이름:</label><br>
//                     <input type="text" id="name" name="name"><br><br>
//                     <label for="email">이메일:</label><br>
//                     <input type="email" id="email" name="email"><br><br>
//                     <label for="number">번호:</label><br>
//                     <input type="tel" id="number" name="number"><br><br>
//                     <input type="submit" value="Submit">
//                 </form>
//             </body>
//         </html>
//     `);
// });

// POST 요청을 처리하는 라우트
app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  console.log("Received data:", receivedData);

  // 받은 데이터를 화면에 보여주기 위한 HTML 응답 생성
  res.send(`
        <html>
            <body>
                <h1>데이터 전송완료</h1>
                <p>Name: ${receivedData.name}</p>
                <p>Email: ${receivedData.email}</p>
                <p>Number: ${receivedData.number}</p>
            </body>
        </html>
    `);
});

app.post("/app");

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

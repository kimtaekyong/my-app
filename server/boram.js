const express = require("express");
const axios = require("axios");
const app = express();
const port = 8082;

// PHP API URL
const apiUrl = "https://app.boram.com/api_lsm/caralc_gaslist"; // PHP 서버의 URL을 여기에 입력

// 기본 라우트
app.get("/", async (req, res) => {
  try {
    // PHP API 호출
    const response = await axios.get(apiUrl);
    const data = response.data;

    // 데이터 구조를 콘솔에 출력하여 확인
    console.log("API response data:", data);

    // 데이터가 배열인지 확인하고, HTML로 렌더링
    if (Array.isArray(data)) {
      // LBRCT_DT 데이터만 추출
      const lbrctData = data.map((item) => item.VHCLE_LBRCT_SN || "N/A");

      res.send(`
        <html>
          <body>
            <h1>Data from PHP API</h1>
            <table border="1">
              <tr>
                <th>LBRCT_DT</th>
              </tr>
              ${lbrctData
                .map(
                  (lbrct) => `
                <tr>
                  <td>${lbrct}</td>
                </tr>
              `
                )
                .join("")}
            </table>
          </body>
        </html>
      `);
    } else {
      res.send(`
        <html>
          <body>
            <h1>Unexpected Data Format</h1>
            <pre>${JSON.stringify(data, null, 2)}</pre>
          </body>
        </html>
      `);
    }
  } catch (error) {
    console.error("Error fetching data from PHP API:", error);
    res.status(500).send("Error fetching data");
  }
});

app.get("/aa", (req, res) => {
  res.send("페이지");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

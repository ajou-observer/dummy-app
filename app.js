const express = require("express");
const client = require("prom-client");

// 메트릭 수집을 위한 Prometheus Registry 생성
const register = new client.Registry();

// 시스템 메트릭 수집기를 등록
client.collectDefaultMetrics({ register });

const app = express();
const port = 3000;

// /metrics 엔드포인트에서 메트릭 노출
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.get("/sleep", async (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  // 지연 후 응답
  res.send("Sleep done");
});

app.listen(port, () => {
  console.log(`Sleep API listening at http://localhost:${port}`);
});

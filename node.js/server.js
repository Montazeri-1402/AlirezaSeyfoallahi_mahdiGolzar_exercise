const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (num1 === undefined || num2 === undefined) {
      res.status(400).send('ورودی نامعتبر');
    } else {
      const result = num1 + num2;
      res.json({ result });
    }
  });
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (num1 === undefined || num2 === undefined) {
      res.status(400).send('ورودی نامعتبر');
    } else {
      const result = num1 - num2;
      res.json({ result });
    }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`وب سرویس ماشین حساب در حال اجرا در پورت ${PORT}...`);
});
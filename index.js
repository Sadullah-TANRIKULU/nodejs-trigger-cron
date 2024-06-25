const express = require('express');
const cron = require('node-cron');

const app = express();
const port = 3000;

const websiteUrl = 'https://weekly-automated-reading-job-2cfbf.web.app';

app.get("/", (req, res) => {
  res.send("Serivce works on render to trigger `https://weekly-automated-reading-job-2cfbf.web.app`")
})

const triggerWebsite = async () => {
  try {
    const response = await fetch(websiteUrl);
    const data = await response.text();
    console.log(response);
    console.log(`Website triggered: ${data}`);
  } catch (error) {
    console.error(error);
  }
};

cron.schedule('10 29 2 * * *', () => {

    triggerWebsite();
    console.log("website is triggered");
//   }
});

console.log('Script is running...');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
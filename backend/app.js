// import {ChatGPTAPI} from 'chatgpt';
const express = require("express");
var cors = require('cors')

const app = express();
const port = 5000;

app.use(cors())

app.use(express.json())
app.get("/", (req, res) => {
  res.send("GET request to homepage");
});

app.post("/chat", async (req, res) => {
  const { ChatGPTAPI } = await import("chatgpt");

  const api = new ChatGPTAPI({
    sessionToken: "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..1HOQTWSilCVS519F.K5CN6mI7YKjgF9Lv8wkp4QG_4EZKA48kmWB5Eq_0zjS_H3344wLZE9L6v67IcI6mou4alk18YXnjlBU9CuRSSI3azGa4u6sJHuIOtTS3VAnzQ9zLqG5BhySsiJdiGa2htMvqbrhBLdCCheS-xU2CBDYdGWu1Qa9ACKUFcD0OFSDhuaGTN4JR-6WCjJXrOZjWJcgC9XQnVfgX5FmzUR0xdC0GBdyvecXQ6hxcQg4SRv8Hvq7ZJLktuFdrpSPQeOlNm2jlnUYlvP93o2aNiRtnZKiQqYQdJBArp21SIUx8F9v5Mzlcsdz5_bYTtXDd3vf3a8tsN9eV4eEHPrwwNRgR8BdfsNrGLDPB0r3RcgZrDv2eZSrJ1-Vvjpx2tPbjsukTQ1TAKhy-O_Hla8IhKJfo9tfTCF0oRpTfnnLnBILL1dZsQIlQFU6-KsxPRc-neZ_pYXqdhYk-G1AWaYw1v0b9hX5zY3tgeV3syYF4hjMBUzb2smuEeCTrjiNO051vaitUvu5F-Faebb0St1K9lT9M-J4WeqUFkGLXh0uRNKAZ_iYfdyEhrbS9_-IpZyxBmNqQliZtXoE6o_ZVWqiuuQF6TqJy_KaHXd-t6wP92JFmCGAqfcVZSc4pu9nGHITqfqcGc12MRFAZwv5qHuF_PN0dqGaxgc4CIjLkMytkcMiwYFutk1cCoZ0kShuowsR6mr2bOHuceMqBFXVIQOD_7wprP_UMg_N0bxFPNI1U6iSDW7RVi9QDw8P0Uhvi2K1BXY1_Q46qnfsdkYObYe3ZEwWOlEmwfQFu0ED8goZEh6NnqK6uf6wHtEWKXagEAIsi2G234oRVn1kERrK-EB_rN6SEz1XSL8AqLMx7XW9vHvGMzEEXVfY9cw7JMi8DQImh86U8XdTSwRDB9eMbHw42D2nN1I3yzfebqDLxVaI8k1TLzsvkr5kzUuHXS1v7LSmUIYtKJ1puRaJi7rGt9N60SGwmoRQPn3Jv3kg0H2vvSbH3Y2j-VxD7npncJw04m1pd0UxAeDTtXRw71-ZNrx2nS9FWCu4ntijvSvw5NM33vGrCnGWDXC7mfboRowJITgan77J9JR-68xxSuLVxYLJ4NiDfJgPcZ7iNjR2tF_sUFJKmyTXQ_5a_UpYK27sPq9ecxrlpTQ3XWf5S8Ki-dLkYFJt8nUVnvZGVzEXtJsjQywnDCdEz6XSL6AeWOi2fACcI_JIvkpm63qy9rgj87Vp2Qow-hmqY7o8Kh-A9Kbvv9I6wA7WmkofdQVJ1GDndampXopAbex7m7reg5IXM896TR3_c0AXFNxdhQUMoagJ1QSWmKOezT6acXVPDo2wtchyLaF-FbIHufGwrNFvXTEUWcAgB9A0CTqSf7cCfCcdHjLkfKJLyM95-mpdMl1rZUOV7RYNgjArwe0DPzQR8A39q81yCkTl0ThQ1aDdbKh6HMcPp90C3GFAI2S3xO7QnBp-D816bntTZH0llu--xJFz8z9ZrpoOl5_fNkmxAponvDalDS4Zc-YinLvlMI6ttJ0YBpXLWmrhvlz-Np15j51LLKbX44hbCEh-pn19es1V1mLE67h5KfxawuSFmmqYCWjvlMky8DM5dz73ktinmJ_DBcxHrPbEjCSjpz2T4_IzmVMtNoJGuRmLHcxx_o7R5SxT3yVsmZsT2gmoNRonDXGWI1iSwnfHqHYMo2aRU5fgNcW_OxGArezbWVd9GOBxZPGbW4yqzTOtgT_uq-GM04E7etbh9zwcB7Krf9tf61D8s2SbAb0k6p62aPBhKdjLLArf5aqRVL-zBpKqccwjMTt_azHaSc0rclYonFLLvruHxaPrbB_DVyzGdaazFrRxai9E1qoaYY-PbYlwCo7aLCk5k8xR6g-pZTesS4-Mq-rYG6OQxW2QLFU7QGRYV4t2fUhUHsLD3lPT8aygOuMvVGVtryDZ1yxzHVeypH0ikH16QmUwpKXN4Pgh5DT8ZDIVBlIb1qXBthTCguStTURtiEIPnv-BN12vJs-r8h9MmcodfAOMSD95Eg7-vTgrmUgSfg7eMF1q-6SG17DuYwm8J3MxqPCDadV7CN6ZmCG4y_VPOQopqHUhDLyXFY0dFOmBkyijrxNKO1MxKC7oB6bNRFcBfmNnRDHHBj5ZRQgx3jvvTzKfPs7riyHHciuz-Mb_bxk8aytHBmOIsvMHveBzVtftPtdUAwZkpmzqf4IZWJLQxsN7ZkhZt2HQihEKyxkHvgm6dHSHmLSb07MK1keSa0IE7VMw.YnoTfV6dw0VrKuSWxRvq8w",
  });

  await api.ensureAuth();

  const response = await api.sendMessage(req.body.text);
  //  return response;
  // console.log(req.body.text);
  res.json({data:response})
});

app.listen(port, () => {
  console.log(`Example app lis on port ${port}`);
});
const express = require("express")
const router = express.Router()

const story = 
{
  "storyTitle": "Short Story of Jack Ma !",
  "story": "He was born in a poor family, when China's cultural revolution was at its peak.\nAs a teenager he used to guide tourist for free just to improve his English.\nHe knew that the only way he could get rid of poverty, was through education. He started applying for different colleges, but got rejected from each of them.\nEven after applying for 30 different jobs, all he ever faced, was plain rejection in 3 simple words Youre no good. When he applied for a job at KFC, he was the only one who get turned down out of 24 people.\nIn 1995, when internet was blooming, he got shocked when no result appeared from China, when he searched beer.\nAnd thats when he came up whit an idea of an online marketplace - ALIBABA.\nBut even after starting Alibaba, he couldnt make it profitable and it was about to go bankrupt. So he asked 17 of his friends to invest in his vision, because he still believed in his idea and soon Alibaba became the largest e-commerce store in the world.\nToday, Jack Ma is the richest man in China and has a net worth of $33 billion.\nJack Mas story teaches us, that it is never too late to believe in yourself and to never lose hope."
}

  
router.get("/", async (req, res) => 
{

res.json(story)
})
  
module.exports = router 
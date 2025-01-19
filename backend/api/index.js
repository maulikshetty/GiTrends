const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

app.use(
  cors({
    origin: ["https://gitrends.vercel.app"], // Allow requests from localhost and my deployed frontend, please update with your's if you forked this repo (maulikshetty)
  })
);

app.get("/", (req, res) => {
  res.send("System is now functional");
});

app.get("/trending", async (req, res) => {
  try {
    const { spoken_language, language, since } = req.query;
    let url = "https://github.com/trending";
    const params = [];
    if (spoken_language) params.push(`spoken_language_code=${spoken_language}`);
    if (language) params.push(`language=${language}`);
    if (since) params.push(`since=${since}`);
    if (params.length) url += `?${params.join("&")}`;

    const { data } = await axios.get(url);

    const $ = cheerio.load(data);
    const repositories = [];
    $(".Box article.Box-row").each((index, element) => {
      const repo = {
        position: index + 1,
        name: $(element).find("h2 a").text().trim().replace(/\s+/g, " "),
        description: $(element).find("p").text().trim(),
        language: $(element).find('[itemprop="programmingLanguage"]').text().trim(),
        stars: $(element).find(".Link--muted:first").text().trim(),
        forks: $(element).find(".Link--muted:nth-of-type(2)").text().trim(),
        url: `https://github.com${$(element).find("h2 a").attr("href")}`,
      };
      repositories.push(repo);
    });

    if (!repositories || repositories.length === 0) {
      return res.json({ message: "You have given wrong parameters" });
    }

    // Format JSON response with indentation
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(repositories, null, 2));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error scraping GitHub Trending page.");
  }
});

module.exports = app;
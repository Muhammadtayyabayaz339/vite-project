export default async function handler(req, res) {
  const apiKey = process.env.VITE_NEWS_API_KEY || req.query.apiKey;
  const { q, pageSize = 6, language = 'en', sortBy = 'publishedAt' } = req.query;
  let url = `https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
export default async function handler(req, res) {
  const apiKey = process.env.VITE_NEWS_API_KEY || req.query.apiKey;
  const { category, country = 'us', pageSize = 6 } = req.query;
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=${apiKey}`;
  if (category) url += `&category=${category}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
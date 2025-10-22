import { useEffect, useState } from 'react'
import axios from 'axios'
import type { NewsArticle } from '../types'

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await axios.get(
          'https://my-home-page-server.onrender.com'
        )
        setNews(response.data)
        console.log(response.data)
      } catch (err) {
        console.error('Erro ao buscar notícias:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Erro ao carregar notícias</div>
  }

  return (
    <div className="bg-[#2c2c2c] p-6 rounded-xl shadow-lg ring-1 ring-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Últimas Notícias</h3>
      <ul className="space-y-3">
        {news.map((news) => (
          <li
            key={news.id}
            className="border-b border-white/10 pb-3 last:border-b-0"
          >
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <p className="text-[#74F9C0]">{news.title}</p>
              <span className="text-xs text-gray-500">{news.source}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsSection

import type { NewsArticle } from '../types'

const mockNews: NewsArticle[] = [
  {
    id: 1,
    title: 'Nova versão do React é lançada com melhorias de performance',
    source: 'React News',
    url: '#',
  },
  {
    id: 2,
    title: 'Python se mantém como a linguagem mais popular em 2025',
    source: 'Dev Weekly',
    url: '#',
  },
  {
    id: 3,
    title:
      'Inteligência Artificial generativa transforma o mercado de trabalho',
    source: 'Future Tech',
    url: '#',
  },
  {
    id: 4,
    title: 'Dicas essenciais de Tailwind CSS para agilizar seu desenvolvimento',
    source: 'CSS Masters',
    url: '#',
  },
  {
    id: 5,
    title: 'O futuro do TypeScript: o que esperar das próximas atualizações',
    source: 'TS Today',
    url: '#',
  },
]

const NewsSection: React.FC = () => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg ring-1 ring-white/10">
    <h3 className="text-xl font-bold text-white mb-4">Últimas Notícias</h3>
    <ul className="space-y-3">
      {mockNews.map((news) => (
        <li
          key={news.id}
          className="border-b border-gray-700 pb-3 last:border-b-0"
        >
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <p className="text-white group-hover:text-cyan-400 transition-colors">
              {news.title}
            </p>
            <span className="text-xs text-gray-500">{news.source}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default NewsSection

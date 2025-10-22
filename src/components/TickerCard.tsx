interface TickerCardProps {
  name: string
  price: number | undefined
  change: number | undefined
  loading: boolean
  error: boolean
  icon: React.ReactNode
}

const TickerCard: React.FC<TickerCardProps> = ({
  name,
  price,
  change,
  loading,
  error,
  icon,
}) => {
  const isPositive = change !== undefined && change >= 0

  const formatPrice = (p: number | undefined) => {
    if (p === undefined) return '...'
    return p.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const formatChange = (c: number | undefined) => {
    if (c === undefined) return ''
    return `${c.toFixed(2)}%`
  }

  const changeColor = isPositive ? 'text-green-400' : 'text-red-400'

  if (loading) {
    return (
      <div className="bg-[#2c2c2c] p-4 rounded-xl animate-pulse h-[116px]">
        <div className="h-4 bg-[#3a3a3a] rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-[#3a3a3a] rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-[#3a3a3a] rounded w-1/3"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-[#2c2c2c] p-4 rounded-xl flex flex-col justify-center items-center text-red-400 h-[116px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Erro ao carregar</span>
      </div>
    )
  }

  return (
    <div className="bg-[#2c2c2c] p-4 rounded-xl shadow-lg ring-1 ring-white/10 transition-transform duration-300 hover:scale-105">
      <div className="flex items-center mb-2">
        <div className="mr-3 text-[#74F9C0]">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <p className="text-2xl font-bold text-white">{formatPrice(price)}</p>
      <p
        className={`text-sm font-medium ${changeColor} ${
          !change ? 'opacity-0' : ''
        }`}
      >
        {formatChange(change)}
      </p>
    </div>
  )
}

export default TickerCard

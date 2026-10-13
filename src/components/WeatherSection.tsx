import { useEffect, useState } from 'react'
import { fetchWeather, formatDate, getWeatherInfo, type WeatherData } from '../weather'

const CARD = 'bg-[#2c2c2c] p-6 rounded-xl shadow-lg ring-1 ring-white/10'

const ERROR_ICON = 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
const CLOUD_ICON =
  'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'

const SvgIcon: React.FC<{ path: string; className: string }> = ({ path, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
)

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center gap-1">
    <span className="text-gray-500 text-xs">{label}</span>
    <span className="text-white font-semibold">{value}</span>
  </div>
)

const WeatherSection: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchWeather()
      .then(setWeather)
      .catch((err) => {
        console.error('Erro ao buscar previsão do tempo:', err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className={CARD}>
        <div className="animate-pulse space-y-4">
          <div className="h-5 bg-[#3a3a3a] rounded w-1/3"></div>
          <div className="h-24 bg-[#3a3a3a] rounded"></div>
          <div className="flex flex-col gap-2 sm:hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-12 bg-[#3a3a3a] rounded-lg"></div>
            ))}
          </div>
          <div className="hidden sm:grid grid-cols-8 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-28 bg-[#3a3a3a] rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error || !weather) {
    return (
      <div className={`${CARD} flex flex-col items-center justify-center text-red-400 h-[200px]`}>
        <SvgIcon path={ERROR_ICON} className="h-6 w-6 mb-2" />
        <span>Erro ao carregar previsão do tempo</span>
      </div>
    )
  }

  const { current, daily } = weather
  const currentInfo = getWeatherInfo(current.weatherCode)

  // Week-wide temperature range, used to position each day's min–max bar on mobile
  const weekMin = Math.min(...daily.map((d) => d.tempMin))
  const weekMax = Math.max(...daily.map((d) => d.tempMax))
  const weekSpan = Math.max(weekMax - weekMin, 1)

  return (
    <div className={CARD}>
      <div className="flex items-center gap-2 mb-5">
        <SvgIcon path={CLOUD_ICON} className="h-5 w-5 text-[#74F9C0]" />
        <h3 className="text-xl font-bold text-white">Previsão do Tempo</h3>
        <span className="text-sm text-gray-400 ml-auto">São José dos Campos, SP</span>
      </div>

      <div className="bg-[#212121] rounded-xl p-5 mb-5 flex flex-col sm:flex-row items-center gap-5">
        <div className="text-6xl">{currentInfo.icon}</div>
        <div className="text-center sm:text-left">
          <div className="text-5xl font-bold text-white">{Math.round(current.temperature)}°C</div>
          <div className="text-[#74F9C0] font-medium mt-1">{currentInfo.description}</div>
        </div>
        <div className="sm:ml-auto flex gap-6 text-sm text-gray-300">
          <Stat label="Umidade" value={`💧 ${current.humidity}%`} />
          <Stat label="Vento" value={`💨 ${current.windSpeed} km/h`} />
        </div>
      </div>

      {/* Mobile: vertical list with temperature range bars */}
      <ul className="sm:hidden divide-y divide-white/5 bg-[#212121] rounded-xl overflow-hidden">
        {daily.map((day) => {
          const isToday = day.dayName === 'Hoje'
          const left = ((day.tempMin - weekMin) / weekSpan) * 100
          const width = Math.max(((day.tempMax - day.tempMin) / weekSpan) * 100, 4)
          return (
            <li
              key={day.date}
              className={`flex items-center gap-3 px-4 py-3 ${isToday ? 'bg-[#74F9C0]/10' : ''}`}
            >
              <div className="w-16 shrink-0 leading-tight">
                <div
                  className={`text-sm font-bold capitalize ${isToday ? 'text-[#74F9C0]' : 'text-gray-200'}`}
                >
                  {day.dayName}
                </div>
                <div className="text-xs text-gray-500">{formatDate(day.date)}</div>
              </div>

              <div className="w-12 shrink-0 flex flex-col items-center leading-none">
                <span className="text-2xl">{getWeatherInfo(day.weatherCode).icon}</span>
                {day.precipitationProb > 0 && (
                  <span className="text-[10px] font-semibold text-blue-400 mt-0.5">
                    {day.precipitationProb}%
                  </span>
                )}
              </div>

              <div className="flex-1 flex items-center gap-2 min-w-0">
                <span className="w-7 text-right text-sm text-gray-500 tabular-nums">
                  {Math.round(day.tempMin)}°
                </span>
                <div className="relative flex-1 h-1.5 rounded-full bg-white/10">
                  <div
                    className="absolute inset-y-0 rounded-full bg-gradient-to-r from-sky-400 via-[#74F9C0] to-amber-400"
                    style={{ left: `${left}%`, width: `${width}%` }}
                  />
                </div>
                <span className="w-7 text-sm font-semibold text-white tabular-nums">
                  {Math.round(day.tempMax)}°
                </span>
              </div>
            </li>
          )
        })}
      </ul>

      {/* Desktop: 8-column grid */}
      <div className="hidden sm:grid grid-cols-8 gap-2">
        {daily.map((day) => {
          const isToday = day.dayName === 'Hoje'
          return (
            <div
              key={day.date}
              className={`flex flex-col items-center rounded-lg p-3 transition-all duration-200 ${
                isToday ? 'bg-[#74F9C0]/10 ring-1 ring-[#74F9C0]/30' : 'bg-[#212121] hover:bg-[#2a2a2a]'
              }`}
            >
              <span className={`text-base font-bold mb-1 ${isToday ? 'text-[#74F9C0]' : 'text-gray-400'}`}>
                {day.dayName}
              </span>
              <span className="text-sm text-gray-500 mb-2">{formatDate(day.date)}</span>
              <span className="text-4xl mb-2">{getWeatherInfo(day.weatherCode).icon}</span>
              <div className="flex gap-1.5 text-base">
                <span className="text-white font-semibold">{Math.round(day.tempMax)}°</span>
                <span className="text-gray-500">{Math.round(day.tempMin)}°</span>
              </div>
              {day.precipitationProb > 0 && (
                <span className="text-sm text-blue-400 mt-1">🌧️{day.precipitationProb}%</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeatherSection

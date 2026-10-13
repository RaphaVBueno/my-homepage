export interface CurrentWeather {
  temperature: number
  humidity: number
  windSpeed: number
  weatherCode: number
}

export interface DailyForecast {
  date: string
  dayName: string
  tempMax: number
  tempMin: number
  weatherCode: number
  precipitationProb: number
}

export interface WeatherData {
  current: CurrentWeather
  daily: DailyForecast[]
}

// São José dos Campos, SP coordinates
const LAT = -23.1896
const LON = -45.8841

const WEATHER_DESCRIPTIONS: Record<number, { description: string; icon: string }> = {
  0: { description: 'Céu limpo', icon: '☀️' },
  1: { description: 'Predominantemente limpo', icon: '🌤️' },
  2: { description: 'Parcialmente nublado', icon: '⛅' },
  3: { description: 'Nublado', icon: '☁️' },
  45: { description: 'Nevoeiro', icon: '🌫️' },
  48: { description: 'Nevoeiro com geada', icon: '🌫️' },
  51: { description: 'Garoa leve', icon: '🌦️' },
  53: { description: 'Garoa moderada', icon: '🌦️' },
  55: { description: 'Garoa intensa', icon: '🌦️' },
  56: { description: 'Garoa congelante', icon: '🌧️' },
  57: { description: 'Garoa congelante intensa', icon: '🌧️' },
  61: { description: 'Chuva leve', icon: '🌧️' },
  63: { description: 'Chuva moderada', icon: '🌧️' },
  65: { description: 'Chuva forte', icon: '🌧️' },
  66: { description: 'Chuva congelante', icon: '❄️' },
  67: { description: 'Chuva congelante forte', icon: '❄️' },
  71: { description: 'Neve leve', icon: '🌨️' },
  73: { description: 'Neve moderada', icon: '🌨️' },
  75: { description: 'Neve forte', icon: '🌨️' },
  77: { description: 'Granulado de neve', icon: '🌨️' },
  80: { description: 'Pancadas de chuva leve', icon: '🌦️' },
  81: { description: 'Pancadas de chuva', icon: '🌧️' },
  82: { description: 'Pancadas de chuva forte', icon: '⛈️' },
  85: { description: 'Pancadas de neve leve', icon: '🌨️' },
  86: { description: 'Pancadas de neve forte', icon: '🌨️' },
  95: { description: 'Trovoada', icon: '⛈️' },
  96: { description: 'Trovoada com granizo leve', icon: '⛈️' },
  99: { description: 'Trovoada com granizo forte', icon: '⛈️' },
}

export function getWeatherInfo(code: number) {
  return WEATHER_DESCRIPTIONS[code] ?? { description: 'Desconhecido', icon: '❓' }
}

function getDayName(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00')
  const today = new Date()
  today.setHours(12, 0, 0, 0)

  const diffDays = Math.round(
    (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  )

  if (diffDays === 0) return 'Hoje'
  if (diffDays === 1) return 'Amanhã'

  return date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '')
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00')
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
}

export async function fetchWeather(): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America/Sao_Paulo&forecast_days=8`

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000)
  const response = await fetch(url, { signal: controller.signal })
  clearTimeout(timeoutId)

  if (!response.ok) throw new Error('Weather API failed')
  const data = await response.json()

  return {
    current: {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      weatherCode: data.current.weather_code,
    },
    daily: data.daily.time.map((date: string, i: number) => ({
      date,
      dayName: getDayName(date),
      tempMax: data.daily.temperature_2m_max[i],
      tempMin: data.daily.temperature_2m_min[i],
      weatherCode: data.daily.weather_code[i],
      precipitationProb: data.daily.precipitation_probability_max[i],
    })),
  }
}

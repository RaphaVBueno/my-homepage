import { useState, useEffect } from 'react'
import Header from './components/Header'
import TickerCard from './components/TickerCard'
import ReminderCard from './components/ReminderCard'
import NewsSection from './components/NewsSection'
import WeatherSection from './components/WeatherSection'
import type { PriceData } from './types'
import { btcIcon, ethIcon, jsIcon, pythonIcon, usdIcon } from './icons'
import { jstips } from './jstips'
import { pythontips } from './pythontips'

export default function App() {
  const [prices, setPrices] = useState<PriceData>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true)
      setError(false)

      const fetchWithTimeout = (url: string, timeoutMs = 8000): Promise<Response> => {
        const controller = new AbortController()
        const id = setTimeout(() => controller.abort(), timeoutMs)
        return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(id))
      }

      try {
        // Fetch dollar rate with fallback
        let dollarRate: number
        let dollarPctChange: string

        try {
          const dollarResponse = await fetchWithTimeout(
            'https://economia.awesomeapi.com.br/last/USD-BRL'
          )
          if (!dollarResponse.ok) throw new Error('AwesomeAPI failed')
          const dollarData = await dollarResponse.json()
          const dollarInfo = dollarData.USDBRL
          dollarRate = parseFloat(dollarInfo.bid)
          dollarPctChange = dollarInfo.pctChange
        } catch {
          // Fallback: use Binance USDT/BRL as dollar proxy
          try {
            const usdtRes = await fetchWithTimeout(
              'https://api.binance.com/api/v3/ticker/24hr?symbol=USDTBRL'
            )
            if (!usdtRes.ok) throw new Error('Binance USDT failed')
            const usdtData = await usdtRes.json()
            dollarRate = parseFloat(usdtData.lastPrice)
            dollarPctChange = usdtData.priceChangePercent
          } catch {
            throw new Error('Could not fetch dollar rate')
          }
        }

        // Try fetching crypto prices with fallback chain
        let btcBrl: number, btcChange: number, ethBrl: number, ethChange: number

        // Attempt 1: Binance API (direct BRL pairs, no key needed)
        try {
          const [btcRes, ethRes] = await Promise.all([
            fetchWithTimeout('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCBRL'),
            fetchWithTimeout('https://api.binance.com/api/v3/ticker/24hr?symbol=ETHBRL'),
          ])
          if (!btcRes.ok || !ethRes.ok) throw new Error('Binance failed')
          const [btc, eth] = await Promise.all([btcRes.json(), ethRes.json()])
          btcBrl = parseFloat(btc.lastPrice)
          btcChange = parseFloat(btc.priceChangePercent)
          ethBrl = parseFloat(eth.lastPrice)
          ethChange = parseFloat(eth.priceChangePercent)
        } catch {
          // Attempt 2: CoinGecko API
          try {
            const cgRes = await fetchWithTimeout(
              'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl&include_24hr_change=true'
            )
            if (!cgRes.ok) throw new Error('CoinGecko failed')
            const cgData = await cgRes.json()
            btcBrl = cgData.bitcoin.brl
            btcChange = cgData.bitcoin.brl_24h_change
            ethBrl = cgData.ethereum.brl
            ethChange = cgData.ethereum.brl_24h_change
          } catch {
            // Attempt 3: CoinCap API (USD prices, convert with dollar rate)
            const [btcRes, ethRes] = await Promise.all([
              fetchWithTimeout('https://api.coincap.io/v2/assets/bitcoin'),
              fetchWithTimeout('https://api.coincap.io/v2/assets/ethereum'),
            ])
            if (!btcRes.ok || !ethRes.ok) throw new Error('All crypto APIs failed')
            const [btcData, ethData] = await Promise.all([btcRes.json(), ethRes.json()])
            btcBrl = parseFloat(btcData.data.priceUsd) * dollarRate
            btcChange = parseFloat(btcData.data.changePercent24Hr)
            ethBrl = parseFloat(ethData.data.priceUsd) * dollarRate
            ethChange = parseFloat(ethData.data.changePercent24Hr)
          }
        }

        setPrices({
          bitcoin: { brl: btcBrl, brl_24h_change: btcChange },
          ethereum: { brl: ethBrl, brl_24h_change: ethChange },
          dollar: {
            brl: dollarRate,
            pctChange: dollarPctChange,
          },
        })
      } catch (err) {
        console.error('Erro ao buscar cotações:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
  }, [])

  return (
    <div className="bg-[#212121] min-h-screen text-white font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReminderCard title="Lembretes de JS" tips={jstips} icon={jsIcon} />
            <ReminderCard
              title="Lembretes de Python"
              tips={pythontips}
              icon={pythonIcon}
            />
          </div>
          <WeatherSection />
          <NewsSection />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <TickerCard
              name="Bitcoin"
              price={prices.bitcoin?.brl}
              change={prices.bitcoin?.brl_24h_change}
              loading={loading}
              error={error}
              icon={btcIcon}
            />
            <TickerCard
              name="Ethereum"
              price={prices.ethereum?.brl}
              change={prices.ethereum?.brl_24h_change}
              loading={loading}
              error={error}
              icon={ethIcon}
            />
            <TickerCard
              name="Dólar"
              price={prices.dollar?.brl}
              change={
                prices.dollar ? parseFloat(prices.dollar.pctChange) : undefined
              }
              loading={loading}
              error={error}
              icon={usdIcon}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

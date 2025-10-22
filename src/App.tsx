import { useState, useEffect } from 'react'
import Header from './components/Header'
import TickerCard from './components/TickerCard'
import ReminderCard from './components/ReminderCard'
import NewsSection from './components/NewsSection'
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
      try {
        const cryptoResponse = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl&include_24hr_change=true'
        )
        if (!cryptoResponse.ok) throw new Error('Crypto API failed')
        const cryptoData = await cryptoResponse.json()

        const dollarResponse = await fetch(
          'https://economia.awesomeapi.com.br/last/USD-BRL'
        )
        if (!dollarResponse.ok) throw new Error('Dollar API failed')
        const dollarData = await dollarResponse.json()

        const dollarInfo = dollarData.USDBRL

        setPrices({
          bitcoin: cryptoData.bitcoin,
          ethereum: cryptoData.ethereum,
          dollar: {
            brl: parseFloat(dollarInfo.bid),
            pctChange: dollarInfo.pctChange,
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
    <div className="bg-gray-900 min-h-screen text-white font-sans p-4 sm:p-6 lg:p-8">
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

export interface CryptoData {
  brl: number
  brl_24h_change: number
}

export interface PriceData {
  bitcoin?: CryptoData
  ethereum?: CryptoData
  dollar?: {
    brl: number
    pctChange: string
  }
}

export interface Reminder {
  title: string
  code: string
  explanation: string
}

export interface NewsArticle {
  id: number
  title: string
  source: string
  url: string
}

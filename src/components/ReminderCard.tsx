import type { Reminder } from '../types'

interface ReminderCardProps {
  title: string
  tips: Reminder[]
  icon: React.ReactNode
}

const ReminderCard: React.FC<ReminderCardProps> = ({ title, icon, tips }) => {
  const randonTip = () => {
    return tips[Math.floor(Math.random() * tips.length)]
  }

  const tip = randonTip()

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg ring-1 ring-white/10 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="text-2xl mr-3">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex-grow mb-4">
        <p className="text-lg font-semibold text-cyan-400 mb-2">{tip.title}</p>
        <pre className="bg-gray-900 text-white p-3 rounded-md text-sm mb-2 overflow-x-auto">
          <code>{tip.code}</code>
        </pre>
        <p className="text-gray-400 text-sm">{tip.explanation}</p>
      </div>
    </div>
  )
}

export default ReminderCard

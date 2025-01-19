'use client'

import * as React from 'react'

interface TabsProps {
  defaultValue: string
  className?: string
  children: React.ReactNode
}

interface TabsContextType {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined)

export function Tabs({ defaultValue, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabsListProps {
  className?: string
  children: React.ReactNode
}

export function TabsList({ className, children }: TabsListProps) {
  return <div className={`flex ${className}`}>{children}</div>
}

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
}

export function TabsTrigger({ value, children }: TabsTriggerProps) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error('TabsTrigger must be used within Tabs')

  const { activeTab, setActiveTab } = context

  return (
    <button
      className={`px-4 py-2 ${
        activeTab === value
          ? 'bg-gray-800 text-white'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      } rounded-t-lg transition-colors`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

interface TabsContentProps {
  value: string
  children: React.ReactNode
}

export function TabsContent({ value, children }: TabsContentProps) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error('TabsContent must be used within Tabs')

  const { activeTab } = context

  if (activeTab !== value) return null

  return <div>{children}</div>
}


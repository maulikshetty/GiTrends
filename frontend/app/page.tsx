import TrendingRepos from './components/trending-repos'
import Documentation from './components/documentation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Footer } from './components/footer'

export default function Home() {
  // const currentDate = new Date().toLocaleDateString('en-US', { 
  //   year: 'numeric', 
  //   month: 'long', 
  //   day: 'numeric' 
  // })

  return (
    <main className="min-h-screen bg-black text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          GitHub Trending Repositories
        </h1>
        <p className="text-center text-sm text-gray-400 mb-8">Top repositories of Today</p>
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-4">
            <TabsTrigger value="trending">Trending Repos</TabsTrigger>
            <TabsTrigger value="documentation">API Documentation</TabsTrigger>
          </TabsList>
          <TabsContent value="trending">
            <TrendingRepos />
          </TabsContent>
          <TabsContent value="documentation">
            <Documentation />
          </TabsContent>
        </Tabs>
        <Footer />
      </div>
    </main>
  )
}


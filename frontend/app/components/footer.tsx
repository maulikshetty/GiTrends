import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          Learn more about me @ {' '}
          <a 
            href="https://maulik.sh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            maulik.sh
          </a>
        </p>
        <a
          href="https://github.com/maulikshetty"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 text-gray-400 hover:text-purple-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>@maulikshetty</span>
        </a>
      </div>
    </footer>
  )
}


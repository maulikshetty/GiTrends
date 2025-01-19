export default function Documentation() {
    return (
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">API Documentation</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">Base URL</h3>
        <pre className="bg-gray-900 p-4 rounded-md">
          <code>gitrends.vercel.app</code>
        </pre>
  
        <h3 className="text-xl font-semibold mt-6 mb-2">1. Get Trending Repositories</h3>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Endpoint</h4>
        <pre className="bg-gray-900 p-4 rounded-md">
          <code>/trending</code>
        </pre>
  
        <h4 className="text-lg font-semibold mt-4 mb-2">Description</h4>
        <p>Fetches trending repositories from GitHub.</p>
  
        <h4 className="text-lg font-semibold mt-4 mb-2">Query Parameters</h4>
        <table className="w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-900">
              <th className="border border-gray-800 p-2">Parameter</th>
              <th className="border border-gray-800 p-2">Type</th>
              <th className="border border-gray-800 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-800 p-2">language</td>
              <td className="border border-gray-800 p-2">String</td>
              <td className="border border-gray-800 p-2">Filter by programming language (e.g., javascript, python, java).</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">since</td>
              <td className="border border-gray-800 p-2">String</td>
              <td className="border border-gray-800 p-2">Filter by time range. Allowed values: daily (default), weekly, monthly.</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">spoken_language</td>
              <td className="border border-gray-800 p-2">String</td>
              <td className="border border-gray-800 p-2">Filter by spoken language (e.g., en, zh, es). Optional.</td>
            </tr>
          </tbody>
        </table>
  
        <h4 className="text-lg font-semibold mt-4 mb-2">Example Request</h4>
        <pre className="bg-gray-900 p-4 rounded-md">
          <code>GET /trending?language=javascript&since=weekly</code>
        </pre>
  
        <h4 className="text-lg font-semibold mt-4 mb-2">Response</h4>
        <p>Returns an array of trending repositories.</p>
  
        <h4 className="text-lg font-semibold mt-4 mb-2">Example Response</h4>
        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
          <code>
  {`[
    {
      "position": 1,
      "name": "vercel/next.js",
      "description": "The React Framework.",
      "language": "JavaScript",
      "stars": "96,500",
      "forks": "20,400",
      "url": "https://github.com/vercel/next.js"
    },
    {
      "position": 2,
      "name": "mui/material-ui",
      "description": "MUI Core: Ready-to-use foundational React components.",
      "language": "TypeScript",
      "stars": "85,300",
      "forks": "9,500",
      "url": "https://github.com/mui/material-ui"
    }
  ]`}
          </code>
        </pre>
      </div>
    )
  }
  
  
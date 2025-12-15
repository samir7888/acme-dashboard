
import { Dashboard } from '../components/dashboard/Dashboard'
import { Sidebar } from '../components/sidebar/Sidebar'
import { ErrorBoundary } from '../components/ui/ErrorBoundry'
function App() {

  return (
    <ErrorBoundary>
      <div className='flex min-h-screen bg-gray-50 font-sans'>
        <Sidebar />
        <Dashboard />
      </div>
    </ErrorBoundary>
  )
}

export default App

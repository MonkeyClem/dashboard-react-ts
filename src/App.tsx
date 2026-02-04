import './App.css'
import { PageShell } from './components/layout/PageShell'
import DashboardPage from './pages/DashboardPage/DashboardPage'

function App() {

  return (
    <>
      <PageShell title='Dashboard'>
        <DashboardPage/>
      </PageShell>
    </>
  )
}

export default App

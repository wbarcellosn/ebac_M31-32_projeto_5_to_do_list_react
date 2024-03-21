import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import * as GS from './styles'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'register',
      element: <Register />
    }
  ])
  return (
    <>
      <GS.default />
      <GS.Conteiner>
        <RouterProvider router={routes} />
      </GS.Conteiner>
    </>
  )
}

export default App

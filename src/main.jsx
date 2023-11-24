import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

// Page components
import App from './App'
import Home from './components/Home'
import CharIndex from './components/CharIndex'
import CharCard from './components/CharCard'
import ErrorPage from './components/ErrorPage'
import SpellIndex from './components/SpellIndex'

import { getAllChars, getSingleChar} from './utilities/loaders/char'
import { getAllSpells } from './utilities/loaders/spells'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/charIndex',
        element: <CharIndex />,
        loader: getAllChars
      },
      {
        path: 'charIndex/:charId',
        element: <CharCard />,
        loader: async ({ params }) => getSingleChar(params.charId)
      },
      {
        path: '/spellIndex',
        element: <SpellIndex />,
        loader: getAllSpells
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

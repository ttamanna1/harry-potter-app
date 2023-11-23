import { useRouteError } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  console.log('USE THIS STATUS TO GIVE MORE SPECIFIC ERROR LAYOUTS ->', error.status)

  return (
    <>
      <Nav />
        <div id="error-page">
          {/* <h1><i>{error.statusText || error.message}</i></h1> */}
          <p>Sorry, the magic has failed. Please try again later.</p>
        </div>
      <Footer />
    </>
  )
}
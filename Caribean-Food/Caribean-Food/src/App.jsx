import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/Landingpage/LandingPage";
import Home from "./pages/Home/Home";

const App = () => {

  return (

    <>

      <Routes>
        <Route element={<LandingPage />}>
          <Route path="/" element={<Home />} />

        </Route>

      </Routes>

    </>

  )

};

export default App;
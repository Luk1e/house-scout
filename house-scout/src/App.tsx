import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";

import { HeaderComponent } from "./components";

function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

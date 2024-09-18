import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";

import { HeaderComponent } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

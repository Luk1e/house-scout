import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

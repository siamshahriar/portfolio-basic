import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="  ">
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <ScaleLoader
            color="#36d7b7"
            loading={loading}
            height="100"
            width="10"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <RouterProvider router={routes}></RouterProvider>
          <Toaster></Toaster>
        </>
      )}
    </div>
  );
}

export default App;

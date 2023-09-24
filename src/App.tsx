import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </>
  );
};
export default App;

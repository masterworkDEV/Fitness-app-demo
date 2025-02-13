import Header from "./Components/Header/Header";
import Layout from "./Pages/Layout";
import Footer from "./Components/Footer";
import { DataProvider } from "./context/DataContext";
import image from "./assets/images/hero-image.png";

function App() {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <Layout />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;

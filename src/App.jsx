import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

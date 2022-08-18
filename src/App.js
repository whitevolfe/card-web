import "./App.css";
import MediaCard from "./Components/Card";

function App() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MediaCard />
      </div>
    </main>
  );
}

export default App;

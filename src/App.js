import "./styles.css";
import ReactPlayer from "react-player";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=hH7-rk6pFLg"
        controls={true}
        // width="100%"
        // height="100%"
        style={{ backgroundColor: "#000000" }}
        playing={false}
      />
    </div>
  );
}

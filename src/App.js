import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/no-compression.loader.js",
    dataUrl: "Build/no-compression.data",
    frameworkUrl: "Build/no-compression.framework.js",
    codeUrl: "Build/no-compression.wasm",
  });

  return (
    <div className="App">
      <Unity unityProvider={unityProvider} style={{width: 2560, height: 1440}} />
    </div>
  );
}

export default App;

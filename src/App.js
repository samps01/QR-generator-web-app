import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { QRCodeCanvas } from './Components/QRCodeCanvas';
import { UrlForms } from './Components/UrlForms';
import { Context } from './Context';

function App() {
  const [userUrl, setUserUrl] = useState("");
  const providerValue = useMemo(() => ({ userUrl, setUserUrl }), [userUrl, setUserUrl]);

  useEffect(() => {
    if (!window.localStorage.getItem("urlEntries")) {
      window.localStorage.setItem("urlEntries", "[]");
    }
  }, [])

  return (
    <Context.Provider value={providerValue}>
      <div className="App">
        <UrlForms />
        <QRCodeCanvas />
      </div>
    </Context.Provider>
  );
}

export default App;

import React, {useState} from 'react';
import './App.scss';
import Header from "./Header";
import Meta from "./Meta";
import Control from "./Controls";

function App() {
    const [step, setStep] = useState(1)
    const [darkMode, setDarkMode] = useState(false)

    return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="left">
            <p className="description">
                Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich.<br/><br/>
                Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.
            </p>
            <div className="controls">
                <div className="meta">
                    <Meta step={step}/>
                </div>
                <div className="control">
                    <Control step={step} setStep={setStep} setDarkMode={setDarkMode}/>
                </div>
            </div>
        </div>
        <div className="right" style={{backgroundImage: "url('Mask Group.png')"}}>
            <div className={`dark-image ${darkMode && 'active'}`} style={{backgroundImage: "url('Mask Group Dark.png')"}}></div>
             <img src={`Lamp-1.png`} className={step === 1 ? 'active' : ''}/>
            <img src={`Lamp-2.png`} className={step === 2 ? 'active' : ''}/>
            <img src={`Lamp-3.png`} className={step === 3 ? 'active' : ''}/>
        </div>
      </div>
    </div>
  );
}

export default App;

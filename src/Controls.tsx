import './Control.scss'
import React from "react";

function Control(props: {step: number, setStep: React.Dispatch<number>, setDarkMode: React.Dispatch<boolean>}) {
    const { step, setStep, setDarkMode } = props;

    return (
        <div className="Control">
            <ul>
                <li onClick={() => {setStep(1)}}>
                    <img src="Lamp-1.png" alt="lamp 1"/>
                </li>
                <li onClick={() => {setStep(2)}}>
                    <img src="Lamp-2.png" alt="lamp 2"/>
                </li>
                <li onClick={() => {setStep(3)}}>
                    <img src="Lamp-3.png" alt="lamp 3"/>
                </li>
            </ul>
            <div className="day-night">
                <span onClick={() => {setDarkMode(false)}}>
                    <img src="sun.svg"/>
                </span>
                <span onClick={() => {setDarkMode(true)}}>
                    <img src="night.svg"/>
                </span>
            </div>
        </div>
    );
}

export default Control;


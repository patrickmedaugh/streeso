import './Keyboard.css'
import * as Pizzicato from 'pizzicato'

const musicNoteModifiers = {
    'A': 1,
    'A#': 58.27 / 55,
    'B': 61.74 / 55,
    'C': 65.41 / 55,
    'C#': 69.3 / 55,
    'D': 73.42 / 55,
    'D#': 77.78 / 55,
    'E': 82.41 / 55,
    'F': 87.31 / 55,
    'F#': 92.5 / 55,
    'G': 98 / 55,
    'G#': 103.83 / 55,
}
let A4is440 = true
const A4 = A4is440 ? 440 : 432

function Keyboard() {
  let activeSounds = {}
  const keyDownHandler = event => {
    console.log(event.code)
    const sound = new Pizzicato.Sound({

    })
    activeSounds[event.code] = sound
  }

  return (
    <div className="Keyboard">
        <div className="KeyboardRow">
            <button className="Ab1 black-button">Ab</button>
            <button className="Bb1 black-button">Bb</button>
            <button className="C1">C</button>
            <button className="D1">D</button>
            <button className="E1">E</button>
            <button className="F#1 black-button">F#</button>
            <button className="G#1 black-button">G#</button>
            <button className="A#1 black-button">A#</button>
        </div>
        <div className="KeyboardRow">
            <button className="Db1 black-button">Db</button>
            <button className="Eb1 black-button">Eb</button>
            <button className="F1">F</button>
            <button className="G1">G</button>
            <button className="A1">A</button>
            <button className="B1">B</button>
            <button className="C#1 black-button">C#</button>
            <button className="D#1 black-button">D#</button>
        </div>
        <div className="KeyboardRow">
            <button className="Ab2 black-button">Ab</button>
            <button className="Bb2 black-button">Bb</button>
            <button className="C2">C</button>
            <button className="D2">D</button>
            <button className="E2">E</button>
            <button className="F#2 black-button">F#</button>
            <button className="G#2 black-button">G#</button>
            <button className="A#2 black-button">A#</button>
        </div>
        <div className="KeyboardRow">
            <button className="Db2 black-button">Db</button>
            <button className="Eb2 black-button">Eb</button>
            <button className="F2">F</button>
            <button className="G2">G</button>
            <button className="A2">A</button>
            <button className="B2">B</button>
            <button className="C#2 black-button">C#</button>
            <button className="D#2 black-button">D#</button>
        </div>
    </div>
  )
}

export default Keyboard

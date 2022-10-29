import './Keyboard.css'
import * as Pizzicato from 'pizzicato'

const musicNoteModifiers = {
    'A': 1,
    'A#': 58.27 / 55,
    'Bb': 58.27 / 55,
    'B': 61.74 / 55,
    'C': 65.41 / 55,
    'C#': 69.3 / 55,
    'Db': 69.3 / 55,
    'D': 73.42 / 55,
    'D#': 77.78 / 55,
    'Eb': 77.78 / 55,
    'E': 82.41 / 55,
    'F': 87.31 / 55,
    'F#': 92.5 / 55,
    'Gb': 92.5 / 55,
    'G': 98 / 55,
    'G#': 103.83 / 55,
    'Ab': 103.83 / 55,
}
let A4is440 = true
const A1 = A4is440 ? 27.5 : 27
const keymap = {
  'z': ''
  // etc. fill this in later, maybe optional remapping
}

function Keyboard() {
  let activeSounds = {}
  const keyDownHandler = event => {
    console.log(event.code)
    const note = keymap[event.code]
    const noteOctave = note.slice(note.length-1)
    const noteTone = note.slice(0, note.length-1)

    const frequency = A1 * musicNoteModifiers[noteTone] * (2^noteOctave)
    const sound = new Pizzicato.Sound({
      source: 'wave',
      options: {
        frequency 
      }
    })
    activeSounds[event.code] = sound
    sound.play()
  }

  return (
    <div className="Keyboard">
        <div className="KeyboardRow">
            <button onKeyDown={keyDownHandler} className="Ab1 black-button">Ab</button>
            <button onKeyDown={keyDownHandler} className="Bb1 black-button">Bb</button>
            <button onKeyDown={keyDownHandler} className="C1">C</button>
            <button onKeyDown={keyDownHandler} className="D1">D</button>
            <button onKeyDown={keyDownHandler} className="E1">E</button>
            <button onKeyDown={keyDownHandler} className="F#1 black-button">F#</button>
            <button onKeyDown={keyDownHandler} className="G#1 black-button">G#</button>
            <button onKeyDown={keyDownHandler} className="A#1 black-button">A#</button>
        </div>
        <div className="KeyboardRow">
            <button onKeyDown={keyDownHandler} className="Db1 black-button">Db</button>
            <button onKeyDown={keyDownHandler} className="Eb1 black-button">Eb</button>
            <button onKeyDown={keyDownHandler} className="F1">F</button>
            <button onKeyDown={keyDownHandler} className="G1">G</button>
            <button onKeyDown={keyDownHandler} className="A1">A</button>
            <button onKeyDown={keyDownHandler} className="B1">B</button>
            <button onKeyDown={keyDownHandler} className="C#1 black-button">C#</button>
            <button onKeyDown={keyDownHandler} className="D#1 black-button">D#</button>
        </div>
        <div className="KeyboardRow">
            <button onKeyDown={keyDownHandler} className="Ab2 black-button">Ab</button>
            <button onKeyDown={keyDownHandler} className="Bb2 black-button">Bb</button>
            <button onKeyDown={keyDownHandler} className="C2">C</button>
            <button onKeyDown={keyDownHandler} className="D2">D</button>
            <button onKeyDown={keyDownHandler} className="E2">E</button>
            <button onKeyDown={keyDownHandler} className="F#2 black-button">F#</button>
            <button onKeyDown={keyDownHandler} className="G#2 black-button">G#</button>
            <button onKeyDown={keyDownHandler} className="A#2 black-button">A#</button>
        </div>
        <div className="KeyboardRow">
            <button onKeyDown={keyDownHandler} className="Db2 black-button">Db</button>
            <button onKeyDown={keyDownHandler} className="Eb2 black-button">Eb</button>
            <button onKeyDown={keyDownHandler} className="F2">F</button>
            <button onKeyDown={keyDownHandler} className="G2">G</button>
            <button onKeyDown={keyDownHandler} className="A2">A</button>
            <button onKeyDown={keyDownHandler} className="B2">B</button>
            <button onKeyDown={keyDownHandler} className="C#2 black-button">C#</button>
            <button onKeyDown={keyDownHandler} className="D#2 black-button">D#</button>
        </div>
    </div>
  )
}

export default Keyboard

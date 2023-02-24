import './App.css';
import React, { useCallback, useState } from 'react';
import Stopwatch from './components/DurationExercise';
import LapTimer from './components/RunningExercise';
//import IncrementCounter from './components/RepetitionExercise';
//code from instructor John Murray from Monday's Class session 2/20/2023 (origianl code commented out at the bottom of document)

const MENU_SCREEN ="menu"
const EXERCISE_SCREEN="exercise"
const DURATION_EXERCIISE="duration"
const REPETITION_EXERCISE="repetition"
const RUNNING_EXERCISE="running"

function DurationExercise( {exercise, setMenuScreen}) {
let {name} = exercise
return <div>
    <p>{name}</p>
    <Stopwatch/>
    <button style={{fontSize:"1em"}} onClick={setMenuScreen}>Return to Menu</button>
    </div>
}

function RepetitionExercise({exercise, setMenuScreen}) {
    let [count, setCount]= useState(0)
    return <div>
        <p>{exercise.name}</p>
      
        <p style={{fontSize:"5em"}}>{count}</p>
        <button stlye={{fontSize:"2em"}}
        onClick={() => setCount (count=>count+1)}>Increment</button>
         <button stlye={{fontSize:"2em"}}
         onClick={()=>setCount(0)}>Reset</button> <br/>
         <button style={{fontSize:"1em"}} onClick={setMenuScreen}>Return to Menu</button>
    </div>
    
}
function RunningExercise( {exercise, setMenuScreen}) {
let {name} = exercise
return <div>
    <p>{name}</p>
    <LapTimer/>
    <button style={{fontSize:"2em"}} onClick={setMenuScreen}>Return to Menu</button>
    </div>
}

let exerciseList= [
{type: DURATION_EXERCIISE, name: "Running" },
{type: DURATION_EXERCIISE,name:"Rowiiing"},
{type: DURATION_EXERCIISE, name:"Swimming"},
{type: REPETITION_EXERCISE, name:"Push Ups"},
{type:RUNNING_EXERCISE, name:"Running Exercise"},
]

function App() {
let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN)
let [currentExercise, setCurrentExercise] =useState({})
let screenComponent = undefined
let buttonClick = useCallback((exercise) => {
setCurrentExercise(exercise)
setCurrentScreen(EXERCISE_SCREEN)
})


if (currentScreen=== MENU_SCREEN) {
screenComponent = <div> 
    <p>Exercise menu</p>
    <ul>
      {exerciseList.map((exercise)=> {
    return <li>
        <button onClick={() => buttonClick(exercise)}>{exercise.name}
        </button>
    </li>
      })}
      </ul>
      </div>

    } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
        case DURATION_EXERCIISE:
            screenComponent = <DurationExercise
            exercise={currentExercise}
            setMenuScreen={()=> setCurrentExercise(MENU_SCREEN)}
                />
                break;
                 case REPETITION_EXERCISE:
                    screenComponent =<RepetitionExercise
                    exercise={currentExercise}
                    setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
                    />
                break;
                case RUNNING_EXERCISE:
                    screenComponent=<RunningExercise
                    exercise={currentExercise}
                    setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
                    />
                    break;
                default:
                    screenComponent =undefined
    }
    }
      return (
        <div className="App">
            <header className="App-header">
                {screenComponent}
            </header>
        </div>
      );
}
export default App;

//original code, was able create the menu but could not figure out how to make it so that the users could render the different components different
//exercises called when the clicks on the buttton
//return (
// <div>
          
//<h1>Exercise App!!</h1>
       //   <p>Select an exercise:</p>
         //  <button>Running</button>
         //  <br></br>
         //  <button>Push Ups</button>
      // </div>
 //  );
//}
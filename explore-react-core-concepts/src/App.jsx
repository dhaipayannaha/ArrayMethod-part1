import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import ToDoTwo from './TodoTwo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['Sakib', 'Shoriful Raj', 'Jashim', 'Rubel', 'sha']
  const singers= [
    {id:1, name: 'Dr. mahfuz', age: 34},
    {id:2, name: 'Eav Rahman', age: 38},
    {id:3, name: 'Shuvro Dev', age: 58},
    {id:4, name: 'Prithom', age: 28},
  ]

  return (
    <>
      <h1>Vite + React</h1>


     {
      singers.map(singer => <Singer singer={singer}></Singer>)
     }

      <Actor name={"bappa Raj"}></Actor>
      {
        actors.map(actor => <Actor name = {actor}></Actor>)
      }

      {/* <Todo 
      task = "learn React" 
      isDone = {true}>
      </Todo>
      
      <Todo task = "Explore core concept" isDone = {false}></Todo>
      <Todo task = "Try jsx" isDone = {true}></Todo> */}

      {/* <ToDoTwo task = "codeing" isActive = {false}></ToDoTwo> */}
      {/* <ToDoTwo task = "programing" isActive = {true}></ToDoTwo>
      <ToDoTwo task = "exploring" isActive = {false}></ToDoTwo> */}

      {

       
      /* <Device name="laptop"></Device>
      <Device></Device>
      <Device></Device>
      <Device></Device>

      <Person></Person>

      <Student grade="7" score="99"></Student>
      <Student grade={12} score={65}></Student>
      <Student></Student>

      <Dippo rank={100} high={100}></Dippo>
      <Dippo rank="35" high="67"></Dippo>
      <Dippo></Dippo>

      <Partho height={5.7} weight={100} color={'white'}></Partho>

      <Developer></Developer> */
      
      

      }

    </>
  )
}

function Device() {
  return(
    <h2>divice</h2>
  )
}

function Person() {
  const age = 25;
  const person = {name:'shakib', age:12}
  return <h3>I am a {person.name} with age: {age}</h3>
}

const {grade, score}= { grade:"7", score:"99"}

function Student({grade=1, score=0}) {
  console.log(grade, score)
  return (
    <div className='student'>
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '10px',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
  }
  return(
    <div style={developerStyle}>
      <h5>dev dev</h5>
      <p>codeing</p>
    </div>
  )
}

function Dippo({rank = 0, high = 0}){
  const divStyle ={
    margin: '20px',
    padding: '10px',
    border: '1px solid pink',
    borderRadius: '10px',
    cursor: 'pointer',

  }

  const forh6 = {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  }
  return(
    <div style={divStyle}>
      <h2>Dippo</h2>
      <h6 style={forh6}>Rank: {rank}</h6>
      <h6 style = {forh6}>High: {high}</h6>
    </div>
  )
}

function Partho({height, weight, color}){
  
  const divStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid green',
    borderRadius: '10px',
    cursor: 'pointer'
  }
  const danger ={
    color: 'red',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  }
  const hw = {
    fontWeight: 'bold',
    fontSize: '1.2rem'
  }

  return(
    <div style={divStyle}>
      <h6 className='partho'>This is partho</h6>
      <p>he is a good gye he has a girlfriend</p>
      <h6 style = {hw}>Height: <span style={danger}>{height}</span> <b>ft</b></h6>
      <h6 style = {hw}>Weight: <span style={danger}>{weight}</span> <b>kg</b></h6>
      <h6 style = {hw}>Color: {color}</h6>
    </div>
  )
}

export default App

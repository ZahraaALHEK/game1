import { useState } from 'react';
import './App.css'
import rockImg from "./assets/rock.jpg";
import paperImg from "./assets/paper.jpg";
import scissorsImg from "./assets/scissors.jpg";

function App() {
const [robotChoose,setRobotChoose] = useState({});
const [userChoose,setUserChoose] = useState({});
const [winner,setWinner] = useState("")
const map = [
  {id : 1 ,name : "Rock" ,img : rockImg } ,
  {id : 2 ,name : "Paper" , img : paperImg } ,
  {id : 3 ,name : "Scissors" , img : scissorsImg } 
];
const result = (player1,player2)=>{
  if(player1.id==1){// robot
    switch (player2.id) {
      case 1:
        setWinner("no one");
        break;
      case 2 : 
        setWinner("you winne")
        break;
      case 3 : 
        setWinner("you lose");
        break;
    }
  }
  if (player1.id === 2 ) {
    switch (player2.id) {
      case 1:
        setWinner("you lose");
        break;
      case 2 : 
        setWinner("no one")
        break;
      case 3 : 
        setWinner("you winne");
        break;
    }
  }
  if (player1.id === 3 ) {
    switch (player2.id) {
      case 1:
        setWinner("you wine");
        break;
      case 2 : 
        setWinner("you lose")
        break;
      case 3 : 
        setWinner("no one");
        break;
    }
  }

}
const run = ()=> {
  const n = Math.floor(Math.random() * 3) + 1;
  const robot =  map.find(m => m.id === n);
  setRobotChoose(robot)
  return robot;
}
const choose = (id)=>{
   const c =  map.find(m => m.id === id);
  setUserChoose(c);
  const robot = run();
  result(robot,c);
}

  return (
    <>
      
      <h1>Rock , Paper , Scissors</h1>
      <h3><img src={robotChoose.img} alt={robotChoose.name} /> </h3>
      <hr />
      <h1>{winner}</h1>
      <hr />
      <h3><img src={userChoose.img} alt={userChoose.name} /></h3>
      {/* <button onClick={run} >Random</button> */}
      <div className="btns">
        <h2>Choose one :</h2>
        
        <button onClick={()=>{choose(1)}} >
          <img src={map[0].img} alt={map[0].name} />
          </button> 
        <button onClick={()=>{choose(2)}}><img src={map[1].img} alt={map[1].name} /></button>
        <button onClick={()=>{choose(3)}}><img src={map[2].img} alt={map[2].name} /></button>
      </div>
    </>
  )
}

export default App

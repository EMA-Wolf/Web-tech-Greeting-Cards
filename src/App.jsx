import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  const details = [
    {title:"Happy Birthday", message:"Wishing ypu a fantastic day filled with joy"},
    {title:"Congratulations", message:"Great job on your achievement"},
    {title:"Thank you", message:"Thanks for your kindness and suppport"},
  ]
  return (
    <div>
      <Header/>

      <div className="flex justify-between h-screen text-white">
      {
        details.map((detail, index) => (
          <GreetingCards key={index} title={detail.title} message={detail.message}/>
        ))
      }
      </div>
      
    </div>
  );
};

export default App;

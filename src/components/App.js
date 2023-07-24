
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {

  const tabsSet1 =[
    {title:"Tab 1", content: "Component for Tab 1"},
    {title:"Tab 2", content: "Component for Tab 2"},
    {title:"Tab 3", content: "Component for Tab 3"},
  ]
  const tabsSet2 =[
    {title:"Tab A", content: "Component for Tab A"},
    {title:"Tab B", content: "Component for Tab B"},
    {title:"Tab C", content: "Component for Tab C"},
  ]

  return (
    <div>
        <Tabs tabs={tabsSet1} key={"set 1"}/>

        <Tabs tabs={tabsSet2} key={"set 2"}/>
    </div>
  )
}

export default App

import React, {useState}from 'react'
import "./App.scss"
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import MercuryImg from "../../img/mercury.jpg"

function App() {
  const [nameOfPlanet, setNameOfPlanet] = useState("MERCURY")
  const [definition, setDefinition] = useState("Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.")
  const [mainImg, setMainImg] = useState(MercuryImg)
  const [rotation, setRotation] = useState("58.6 DAYS")
  const [revolution, setRevolution] = useState("87.97 DAYS")
  const [radius, setRadius] = useState("2.439,7 KM")
  const [temp, setTemp] = useState("430 C")
  const [toggle, setToggle] = useState(false)
  const [nonactive, setNonactive] = useState(false)

  const subData = [
    {id:1,value : "OVERVIEW", isActive:true},
    {id:2,value : "INTERNAL STRUCTURE", isActive:false},
    {id:3,value : "SURFACE GEOLOGY", isActive:false}
  ]
  const headerBtns = [
    {
      name : 'MERCURY',
      class : 'white'
    },
    {
      name : 'VENUS',
      class : 'yellow'
    },
    {
      name : 'EARTH',
      class : 'sky'
    },
    {
      name : 'MARS',
      class : 'red'
    },
    {
      name : 'JUPITER',
      class : 'brown'
    },
    {
      name : 'SATURN',
      class : 'yellow'
    },
    {
      name : 'URANUS',
      class : 'sky'
    },
    {
      name : 'NEPTUNE',
      class : 'blue'
    }
  ]

  const [data,setData] = useState(subData)
  
  const getValue = (e) => {
    fetch("data.json")
    .then(res => res.json())
    .then((obj) => {
      setNameOfPlanet(obj[`${e.target.value}`].nameOfPlanet)
      setDefinition(obj[`${e.target.value}`].definition)
      setRotation(obj[`${e.target.value}`].rotation)
      setRevolution(obj[`${e.target.value}`].revolution)
      setRadius(obj[`${e.target.value}`].radius)
      setTemp(obj[`${e.target.value}`].temp)
      setMainImg(obj[`${e.target.value}`].img)
      }
    )
    setData(data.map((item) => {
      if(data.indexOf(item) == 0){
        return {
          ...item, isActive : true
        }
      }
      return {
        ...item, isActive : false
      }
    }))
  }
  const changeInfo = (e) => {
    switch(e.target.value){
      case '0' :
        fetch("data.json")
        .then(res => res.json())
        .then((obj) => {
          setDefinition(obj[`${nameOfPlanet}`].definition)
          }
        )
        break;
      case '1' :
        fetch("data.json")
        .then(res => res.json())
        .then((obj) => {
          setDefinition(obj[`${nameOfPlanet}`].internalStructure)
          }
        )
        break;
      case '2' :
        fetch("data.json")
        .then(res => res.json())
        .then((obj) => {
          setDefinition(obj[`${nameOfPlanet}`].surfaceGeology)
          }
        )
        break;
    }
    setData(subData.map((item) => {
      if(item.id === subData[e.target.value].id){
        return {
          ...item, isActive : true
        }
      }
      return {
        ...item, isActive : false
      }
    }))
  }
  const closeSidebar = (e) => {
    setToggle(!toggle)
    setNonactive(false)
  }
  return (
    <div className='app'>
      <Header
      getValue={getValue}
      toggle={toggle}
      setToggle={setToggle}
      headerBtns={headerBtns}
      nonactive={nonactive}
      setNonactive={setNonactive}
      />
      <Sidebar
      toggle={toggle}
      getValue={getValue}
      closeSidebar={closeSidebar}
      headerBtns={headerBtns}
      setNonactive={setNonactive}
      />
      <Main 
      nameOfPlanet={nameOfPlanet}
      definition={definition}
      changeInfo={changeInfo}
      mainImg={mainImg}
      data={data}
      nonactive={nonactive}
      />
      <Footer
      rotation={rotation}
      revolution={revolution}
      radius={radius}
      temp={temp}
      nonactive={nonactive}
      />
    </div>
  )
}

export default App
import React from 'react'
import "./Header.scss"

function Header({getValue,toggle,setToggle,headerBtns,setNonactive}) {
  const  changetoggle = () => {
    setToggle(!toggle)
    setNonactive(true)
  }
  return (
    <div className='header'>
        <h2 className="planets">THE PLANETS</h2>
        <nav>
            {
              headerBtns.map((item) => {
                return <button className={`btns ${item.class}`} value={item.name} onClick={getValue}>{item.name}</button>
              })
            }
        </nav>
        <div className={`toggle ${toggle === true ? "active" : ""}`} onClick={changetoggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  )
}

export default Header
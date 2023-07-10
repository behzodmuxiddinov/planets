import React from 'react'
import "./Sidebar.scss"

function Sidebar({toggle,closeSidebar,headerBtns,getValue}) {
    
  return (
    <div className={`sidebar ${toggle ? "block" : ""}`}>
        <div className="sidebar-content">
            {
                headerBtns.map((item) => {
                    return <button className='sidebarItem' value={item.name} onClick={(e) => {getValue(e);closeSidebar()}}>
                                <div className="left"> 
                                    <div className={`sign ${item.class}`}></div>
                                    <h3>{item.name}</h3>
                                </div>
                            </button>
                })
            }

        </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import "./Main.scss"

function Main({nameOfPlanet,definition,changeInfo,mainImg,data,nonactive}) {
    const buttons = [
        {
            rank : 0,
        },
        {
            rank : 1,
        },
        {
            rank : 2,
        }
    ]
  return (
    <div className={`main ${nonactive == true ? 'nonactive' : ''}`}>
        <div className="main-content">
            <img src={mainImg} alt=""/>
            <div className="mobileBtns">
                    {
                        buttons.map((item) => {
                            return <button className={`infoBtn ${data[item.rank].isActive === true ? "isActive" : ""}`} value={item.rank} onClick={changeInfo}><div className='num'>{`0${item.rank+1}`}</div>{data[item.rank].value}</button>
                        })
                    }
                </div>
            <div className="infos">
                <div className="features">
                    <h1 className="namePlanet">{nameOfPlanet}</h1>
                    <div className="definition">{definition}</div>
                </div>
                <div className="infoBtns">
                    {
                        buttons.map((item) => {
                            return <button className={`infoBtn ${data[item.rank].isActive === true ? "isActive" : ""}`} value={item.rank} onClick={changeInfo}><div className='num'>{`0${item.rank+1}`}</div>{data[item.rank].value}</button>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
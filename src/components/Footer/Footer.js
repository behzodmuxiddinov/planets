import React from 'react'
import "./Footer.scss"

function footer({revolution,rotation,radius,temp,nonactive}) {
  return (
    <div className={`footer ${nonactive == true ? 'nonactive' : ''}`}>
        <div className="footer-content">
            <ul>
                <li>
                    <h4>ROTATION TIME</h4>
                    <h3>{rotation}</h3>
                </li>
                <li>
                    <h4>REVOLUTION TIME</h4>
                    <h3>{revolution}</h3>
                </li>
                <li>
                    <h4>RADIUS</h4>
                    <h3>{radius}</h3>
                </li>
                <li>
                    <h4>AVERAGE TEMP.</h4>
                    <h3>{temp}</h3>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default footer
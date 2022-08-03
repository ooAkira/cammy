import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './PageHome.css'

const PageHome = () => {
  const [muted, setMuted] = useState(false)
  const [displayVolumePlaying, setDisplayVolumePlaying] = useState("none")
  const [displayVolumeMuted, setDisplayVolumeMuted] = useState("block")

  return (
    <div className='home'>
        <video autoPlay={true} muted={muted} loop={true} controls={false}>
            <source src={require('./video/tokyo.mp4')} type='video/mp4' />
        </video>
        <div className='home-content'>
            <p className='sub-title'>welcome to</p>
            <h1 className='title'>study room</h1>
            <p className='sub-title'>enjoy with us</p>
            <div className="home-content-button">
                <div>
                <Link to='/login'>
                  <button className='btn-1'>join study room</button>
                </Link>
                </div>
                <button className='btn-2'>explore study space</button>
            </div>
            <FontAwesomeIcon 
              icon={faVolumeUp} 
              className="volume volume-playing"
              onClick={() =>{
                setMuted(true)
                setDisplayVolumeMuted("block")
                setDisplayVolumePlaying("none")
              }} 
              style={{ display: displayVolumePlaying }}
            />
            <FontAwesomeIcon 
              icon={faVolumeMute} 
              className="volume volume-muted" 
              onClick={() =>{
                setMuted(false)
                setDisplayVolumePlaying("block")
                setDisplayVolumeMuted("none")
              }} 
              style={{ display: displayVolumeMuted }} 
            />
        </div>
    </div>
  )
}

export default PageHome
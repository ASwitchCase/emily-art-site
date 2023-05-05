import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlideShow from './components/SlideShow'
import dearSister from './images/dear-sister.png'
import dozingOff from './images/Dozing-off.png'
import movingOn from './images/moving-on.png'
import emily from './images/emily.jpg'
import emily2 from './images/emily2.jpg'
import heads from './images/heads.png'
import march from './images/march-came-in-like-a-lion.png'
import mom from './images/mom.png'
import purpleSlumber from './images/purple-slumber.png'
import roberts from './images/Roberts.png'
import theCommute from './images/the-commute.png'
import winFace from './images/win-face.png'
import giveItBack from './images/give-it-back.png'
import burp from './images/BURP!.png'
import helloProdigy from './images/hello-prodigy.png'
import logo from './images/logo.png'

const art = [
  {id: 0, name:"Dear Sister,",img:dearSister},
  {id: 1, name:"Dozing Off",img:dozingOff},
  {id: 2, name:"Moving On",img:movingOn},
  {id: 3, name:'Mom',img:mom},
  {id: 4, name:'Purple Slumber',img:purpleSlumber},
  {id: 5, name:'Roberts', img:roberts},
  {id: 6, name:'The Commute', img: theCommute},
  {id: 7, name:'Heads', img:heads},
  
];

const cartoons = [
  {id: 0, name:"March Comes in Like a Lion",img:march},
  {id: 1, name:"Win Face",img:winFace},
  {id: 2, name:"Give It Back!",img:giveItBack},
  {id: 3, name:'BURP!',img:burp},
  {id: 4, name:'Hello Prodigy',img:helloProdigy},
  
];

const profile_pics = [
  {id: 0, name:"Emily Marie Adams",img:emily},
  {id: 1, name:"Emily Marie Adams",img:emily2},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='top'>
        <img src ={logo} style={{height:'18vh'}}></img>
        <h1>Welcome to Emily's Art Page</h1>
      </div>
      
      <div className='page-container'>
      <h2>About Me</h2>
      <hr></hr>
        <div className='profile-container'>
          <div className='cover-letter'>
            <h1>Hello,</h1>
            <p>My name is Emily Marie Adams. I really enjoy creating works full of Nostalga and heartfelt memories.</p>
            <h2>Please enjoy!</h2>
          </div>
          <div className='cover-profile'>
          <SlideShow slides={profile_pics}></SlideShow>
          </div>
        </div>

        <h2>Gallery</h2>
        <hr></hr>
        <div className='gal-container'>
          <SlideShow slides={art}></SlideShow>
          <br></br>
          <SlideShow slides={cartoons}></SlideShow>
        </div>
      </div>

      <br></br>
      <br></br>
      <div className='foot'>
        <h2 style={{textAlign:'center'}}>Contact Me:</h2>
        <h3 style={{textAlign:'center'}}>emilymarieAda@gmail.com</h3>
      </div>
    </div>
  )
}

export default App

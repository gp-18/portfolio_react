import React from 'react'
import './Portfolio.css'
import calculator from '../../assests/calculator.png'
import netflix from '../../assests/netflix.png'
import time from '../../assests/time-clock.png'
import todolist from '../../assests/todolist.png'
import weather from '../../assests/weather_website.png'

const Portfollio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>My Projects</h2>

    <div className='container portfolio__container'>
      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={time} alt=""/>
      </div>
      <h3>Time-Clock</h3>
      <div className='portfolio__item-cta'>
      <a href='github.com' className='btn'target='_blank'>github</a>
      <a href='github.com' className='btn btn-primarty' target='_blank'>Live Demo</a>
      </div>
      </article>

      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={calculator} alt=""/>
      </div>
      <h3>Calculator</h3>
      <div className='portfolio__item-cta'>
      <a href='github.com' className='btn'target='_blank'>github</a>
      <a href='github.com' className='btn btn-primarty' target='_blank'>Live Demo</a>
      </div>
      </article>

      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={netflix} alt=""/>
      </div>
      <h3>Netflix Ui/Ux Clone</h3>
      <div className='portfolio__item-cta'>
      <a href='github.com' className='btn'target='_blank'>github</a>
      <a href='github.com' className='btn btn-primarty' target='_blank'>Live Demo</a>
      </div>
      </article>

      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={todolist} alt=""/>
      </div>
      <h3>To-Do-List</h3>
      <div className='portfolio__item-cta'>
      <a href='github.com' className='btn'target='_blank'>github</a>
      <a href='github.com' className='btn btn-primarty' target='_blank'>Live Demo</a>
      </div>
      </article>

      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={weather} alt=""/>
      </div>
      <h3>Weather Project </h3>
      <div className='portfolio__item-cta'>
      <a href='github.com' className='btn'target='_blank'>github</a>
      <a href='github.com' className='btn btn-primarty' target='_blank'>Live Demo</a>
      </div>
      </article>

    </div>
   </section>
  )
}

export default Portfollio
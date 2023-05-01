import React from 'react'
import './Experience.css'
import{BsFillPatchCheckFill} from 'react-icons/bs'; 

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>React JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Beginner
              </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>mySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Android</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
        <h3>Coding</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>C++</h4>
              <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Kotlin</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Data Structures</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <div>
              <h4>Algorithms</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
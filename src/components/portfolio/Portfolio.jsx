import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.png'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const data=[
{
  id:1,
  image:IMG1,
  title:'Responsive Web Design',
  github: 'https://github.com/basitzaman/mobilefriendly.git',
  demo:'https://basitzaman.github.io/mobilefriendly/'
},
{
  id:2,
  image:IMG2,
  title:'Food Delivery Responsive site',
  github: 'https://github.com/basitzaman/Food-Delivery.git',
  demo:'https://basitzaman.github.io/Food-Delivery/'

},
{
  id:3,
  image:IMG3,
  title:'Responsive User login System With Admin panel Using PHP',
  github: 'https://github.com/basitzaman/Responsive-User-login-system-with-admin-panel.git',
  demo:'https://zaman12.000webhostapp.com/'

},
{
  id:4,
  image:IMG4,
  title:'E-Library Management System Using PHP',
  github: 'https://github.com/basitzaman/E-Library-Management-System.git',
  demo:'https://zamanlibrary.000webhostapp.com/'

},

]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>
        My Recent Work
      </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src ={image} alt={title} />
  
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github}className='btn' target='__blank' >Github</a>
            <a href={demo} className='btn btn primary' target='__blank'>Live Demo</a>
            </div>
          
          </article>
          )
        })
      }

      </div>
    </section>
  )
} 

export default Portfolio

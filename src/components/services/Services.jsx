import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id ="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
         <article className='service'>
          <div className="service__head">
            <h3>
            IT Specialist
            </h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck size={50} className='service__list-icons'/>
              <p>
              Assessing the technology needs of a business or organization and recommending appropriate solutions.
              </p>
            </li>
            <li>
              <BiCheck size={58}className='service__list-icons'/>
              <p>
              Troubleshooting hardware and software issues, including diagnosing and resolving problems with servers, computers, and other devices.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icons'/>
              <p>
              Troubleshooting hardware and software issues, including diagnosing and resolving problems with servers, computers, and other devices.
              </p>
            </li> */}
            <li>
              <BiCheck size={60}className='service__list-icons'/>
              <p>
              Conducting research on emerging technologies and recommending appropriate solutions to enhance business efficiency and productivity.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icons'/>
              <p>
                Lorem ipsum dolor sit amet consectetur  elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>
                Lorem ipsum dolor sit amet consectetur  elit.
              </p>
            </li> */}
         </ul>
 
         </article>
         <article className='service'>
          <div className="service__head">
            <h3>
              Web Development
            </h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck  size={25} className='service__list-icons'/>
              <p>
              Creating visually appealing and responsive websites.
              </p>
            </li>
            <li>
              <BiCheck  size={20} className='service__list-icons'/>
              <p>
              Website Maintenance and Updates
              </p>
            </li>
            <li>
              <BiCheck size={20} className='service__list-icons'/>
              <p>
              Search Engine Optimization (SEO)
              </p>
            </li>
            <li>
              <BiCheck  size={45}className='service__list-icons'/>
              <p>
              Ensuring a seamless user experience on desktops, laptops, tablets, and smartphones
              </p>
            </li>
            <li>
              <BiCheck  size={45}className='service__list-icons'/>
              <p>
              Developing reusable components and libraries for faster and efficient development
              </p>
            </li>
            <li>
              <BiCheck  size={20} className='service__list-icons'/>
              <p>
              Web hosting and server management
              </p>
            </li>
            <li>
              <BiCheck  size={20} className='service__list-icons'/>
              <p>
              Payment gateway integration
              </p>
            </li>
         </ul>
 
         </article>
         <article className='service'>
          <div className="service__head">
            <h3>
            Database Design And Development
            </h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck size={50} className='service__list-icons'/>
              <p>
              Designing and creating database schemas that meet the requirements of the application or business.
              </p>
            </li>
            <li>
              <BiCheck  size={50} className='service__list-icons'/>
              <p>
              Creating relationships between tables to ensure data consistency and integrity.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icons'/>
              <p>
              Creating Entity-Relationship (ER) diagrams to visualize the database schema and relationships.
              </p>
            </li> */}
            <li>
              <BiCheck  size={50}className='service__list-icons'/>
              <p>
              Choosing appropriate database management systems (DBMS) like MySQL, Oracle, or MongoDB.
              </p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icons'/>
              <p>
              Ensuring data security and access control by creating appropriate user roles and permissions.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icons'/>
              <p>
              Performing backup and restore operations and disaster recovery planning.
              </p>
            </li> */}
         </ul>
 
         </article>
      </div>
    </section>
  )
}

export default Services

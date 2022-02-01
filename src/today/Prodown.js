import React,{ useState, useEffect }  from 'react'

import './Prodown.css'

const point = () => {

  return (
    <div>
      <div className='main-footer' >
        <div className='container'>
          <div className='row'>
            {/* column1*/}
            <div className='col'>
              <h3>Programs</h3>
              <ul className='list-unstyled '>
                <li>
                  <a
                    href='/java-variables'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Java
                  </a>
                </li>
                <li>
                  <a
                    href='/python-variables'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Python
                  </a>
                </li>

                <li>
                  <a
                    href='/csharp-first-program'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    C#
                  </a>
                </li>
                <li>
                  <a
                    href='/javascript-variables'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Javascript
                  </a>
                </li>
                <li>
                  <a
                    href='/c-element'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    C
                  </a>
                </li>
                <li>
                  <a
                    href='/cpp-variable'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    C++
                  </a>
                </li>
                <li>
                  <a
                    href='/php-variables'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Php
                  </a>
                </li>

                <hr
                  style={{
                    borderColor: '#d4c1c1'
                  }}
                />
                <li>
                  <a
                    href='/java-vs-python-basic'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Java Vs Python
                  </a>
                </li>
                <li>
                  <a
                    href='/java-vs-csharp-basic'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Java Vs C#
                  </a>
                </li>
              </ul>
            </div>

            {/* column3*/}
            <div className='col'>
              <h3>Company</h3>
              <ul className='list-unstyled '>
                <li>
                  <a
                    href='/about-us'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='/privacy-policy'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Privacy
                  </a>
                </li>

                <li>
                  <a
                    href='/terms-and-conditions'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Terms and Condition
                  </a>
                </li>
                <li>
                  <a
                    href='/disclaimer'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    disclaimer
                  </a>
                </li>

                <li>
                  <a
                    href='/contact-us'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr
            style={{
              borderColor: '#d4c1c1'
            }}
          />
          <div className='row '>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} CodeExampler | Designed By
              CodeExampler.com | All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default point

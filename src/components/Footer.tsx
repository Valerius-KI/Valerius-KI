import React from 'react'
import SectionWrapper from '../hoc';

const Footer = () => {
  return (
    <footer>
  <div className="flex justify-center items-center flex-col mt-8">
    <span className=''> developed by &copy; </span>
    <a href="amarachukwu-dev.app.vercel">Amarachukwu😎</a>
  </div>
  <div>
    
  </div>
</footer>
  )
}

export default SectionWrapper(Footer, "");
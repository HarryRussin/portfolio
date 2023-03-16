import React from 'react'

function Header() {
  return (
    <nav className='flex p-8 justify-between items-center font-prompt'>
        <div className="flex justify-center items-center">
            <p>Projects</p>
            <p>About</p>
            <p>Contact Me</p>
        </div>

        <button>s
            Hire Me
        </button>
    </nav>
  )
}

export default Header
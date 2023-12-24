import React from 'react'

const ImageHeader = () => {
  return (
    <div className='flex items-center' >
        <img className='w-28 h-28 object-contain 'src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/180px-React_Logo_SVG.svg.png" alt="" />
        <span className='mx-4'>+</span>
        <img className='w-28 h-28 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/96px-Typescript.svg.png" alt="" />
    </div>
  )
}

export default ImageHeader
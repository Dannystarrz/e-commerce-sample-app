import React from 'react'

export default function EnquiryCard({children}) {
  return (
    <div className='border py-4 px-4 hover:bg-[#E6E6E6] gap-3 flex flex-col'>
      {children} 
    </div>
  )
}

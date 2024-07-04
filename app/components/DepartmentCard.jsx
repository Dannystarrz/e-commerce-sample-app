import React from 'react'

export default function DepartmentCard({departmentName, backgroundImage}) {
  return (
    <div className={`bg-[${backgroundImage}]`}>
      <p className='font-bold text-medium'>
         {departmentName}
      </p>
    </div>
  )
}

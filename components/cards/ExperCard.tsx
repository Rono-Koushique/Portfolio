import React from 'react'

type Props = {
    companyTitle: string;
    description: string;
}

export default function ExperCard({ companyTitle, description }: Props) {
  return (
    <div className='w-full border-b py-4 px-4'>
        <h4 className='text-md font-semibold text-neutral-800'>{companyTitle}</h4>
        <p className='font-light text-neutral-700 leading-relaxed mt-2'>{description}</p>
    </div>
  )
}
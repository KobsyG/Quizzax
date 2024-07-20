import React from 'react'

const Question = ({question, theme, point}: {question: string, theme: string | null, point: number}) => {
  return (
    <div className='relative h-[50px] w-[400px] border-2 mx-auto '> ${question}</div>
  )
}

export default Question
import React from 'react'
import CreateQuestion from '../components/CreateQuestion'
import AllQuestionList from '../components/AllQuestionList'

const QuestionsPage = () => {
  return (
    <div className='relative h-full bg-blue-200'>
        <div className='relative h-[30px] w-[300px] bg-red-500 mx-auto'>
            <CreateQuestion />
        </div>
        <div>
            <AllQuestionList />
        </div>
    </div>
  )
}

export default QuestionsPage
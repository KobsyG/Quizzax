import React, { useEffect, useState } from 'react'
import Question from './Question'
import { IQuestion } from '../interface/Question'

const AllQuestionList = () => {

  // const [listQuestions, setListQuestions] = useState<(typeof Question)[]>;
  const [listQuestions, setListQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {

    console.log("useEffect")

    const getQuestions = async () => {
      await fetch('http://localhost:4000/question', {
        method: 'GET',
      }).then(async response => {
        const data: IQuestion[] = await response.json();
        console.log(data);
        setListQuestions(data);
      })
    }

    getQuestions();

  }, [])

  return (
    <>
      <div>AllQuestionList</div>
      <ul>
        {listQuestions.map(data => <Question id={data.id} question={data.question} theme={data.theme?.theme} point={data.point} color={data.theme?.color} />) }
      </ul>
    </>
  )
}

export default AllQuestionList
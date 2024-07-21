import React, { useEffect, useRef } from 'react'

const Question = ({ id, question, theme, point, color }: { id: number, question: string, theme: string | null, point: number, color: string }) => {

    const elementRef = useRef<HTMLDivElement>(null);

    const deleteQuestion = async () => {
        await fetch('http://localhost:4000/question', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then( response => {
            if (elementRef.current) {
                elementRef.current.style.visibility = 'visible';
            }
        }
            
        )
    }

    const modifQuestion = async () => {

    }

    return (
        <div style={{ backgroundColor: color }} className='relative h-[100px] bg-gre w-[800px] border-2 mx-auto flex items-center justify-center'>
            <p className='h-[50px] w-[400px] border-2'> {question}</p>
            <div className='h-[50px] w-[50px] border-2'>{point}</div>
            <button onClick={modifQuestion} className='h-[50px] w-[50px] border-2 bg-blue-500 ml-auto'></button>
            <button onClick={deleteQuestion} className='h-[50px] w-[50px] border-2 bg-red-500 ml-auto'></button>
            <div ref={elementRef} style={{visibility: 'hidden'}} className='absolute h-full w-full bg-gray-400'></div>
        </div>
    )
}


export default Question
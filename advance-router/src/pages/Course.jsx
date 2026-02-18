import React from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Course Details Page for Course ID: {id}</h1>
    </div>
  )
}

export default Course

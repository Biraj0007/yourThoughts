import React, { useContext, useEffect } from 'react'
import PostTemp from './PostTemp'
import noteContext from '../context/notes/noteContext'
// import { useEffect } from 'react'
// import Button from 'react'

const Posts = () => {
  const context = useContext(noteContext)
  const { allUsers, usersNotes } = context
  
  let path1=window.location.href
  if(path1=="/posts"){
    onclick()
  }
  const onclick = () => {
    allUsers()
  }


  return (
    <>
      <div className='mt-3'>
       {usersNotes.map((note) => {
                    return <>
                    <PostTemp name={note['name'] } email={note['email']} notes={note['notes']} />
                    </>
                })}
      <button className='btn btn-primary' onClick={onclick}>Refresh</button>
      </div>
    </>

  )
}

export default Posts
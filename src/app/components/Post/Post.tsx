import { postTypes } from '@/app/Types'
import React, { FC } from 'react'
import './post.modules.css'
import { HiOutlineUser } from "react-icons/hi";

type propsPostsTypes = {
  post: postTypes
}
export const Post: FC<propsPostsTypes> = ({post}) => {
  
  return (
    <>
      <main>
        <div className="container">
          <div className="headerPosts">
            <div className='postAvatar'>
              <HiOutlineUser />
            </div>
            <h1 className='postTitle'>{post.title}</h1>
          </div>
          <div className="center">
            <div className="fon">
              <div className='text'>{post.body}</div>
            </div>
          </div>
        </div>
      </main>
    </>
    
  )
}


import { NextResponse, NextRequest } from 'next/server';

export async function GET(id: number) {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => posts)

  const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => comments)

  console.log(posts, comments);


  const postsAndComments = posts.map((post: any) => {
    const postComments = comments.filter((comment: Comment) => comment.postId === post.id);
    return { post, comments: postComments };
  });
  console.log(postsAndComments);

  const post = postsAndComments.find(p => p.post.id == id);

  return post;
}

import { FC } from 'react';

type TProps = {
  params: {
    id: string;
  }
}
export const Id: FC<TProps> = async ({ params: { id } }) => {

  const post = await GET(+id);
  // const re = f;

  console.log(post, 'ffffff');
  // console.log(re, 'rwererere');



  return (
    <div>
      <pre>
        {JSON.stringify(post, null, 2)}
      </pre>
      {/* <Posts id={id}/> */}
    </div>
  )
}

export default Id;

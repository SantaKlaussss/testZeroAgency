"use client"
import { $posts, addPosts } from '../../stores/posts';
import React, { useEffect } from 'react'
import { useStore } from '@nanostores/react';
import { Post } from '../Post/Post';
import { postTypes } from '@/app/Types';
import {Pagination} from '../Pagination/pagination';
import { computed } from 'nanostores';
import { $currentPage } from '@/app/stores/pagination';

export function Posts() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(addPosts) 

  }, []);

  let currentPage = useStore($currentPage);
  let itemsPerPage = 10;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const $renderedPosts = computed($posts, posts => posts.slice(start, end));

  const renderedPosts = useStore($renderedPosts);
  return (
    <>
      <div>
        {renderedPosts.map((post:postTypes) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
      <Pagination/>
    </>
  )
}

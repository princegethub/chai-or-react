import React from 'react';
import { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import AppwriteSerice from '../appwrite/config'


const AllPosts = () => {
  const [posts, setPosts]  = useState([]);
  useEffect(()=> {},[])
  
  AppwriteSerice.getPosts([]).then((posts)=> posts.map((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }

  }))



  return (
    <div className='w-full py-8'>
      <Container>
      <div className='flex flex-wrap'>
        {posts.map((post) => (
               <div key={post.$id} className='p-2 w-1/4'>
               <PostCard {...post} />
           </div>
        ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;

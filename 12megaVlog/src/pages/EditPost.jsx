import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppWriteService from "../appwrite/config";
import { AppwriteException } from "appwrite";
import { Container, PostForm } from "../components"; 

const EditPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(slug){
      AppWriteService.getPost(slug).then((post) => {
        if(post){
          setPost(post);
        }
      })
    }else{
      navigate('/');
    }
  },[slug , navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ): null;
};

export default EditPost;

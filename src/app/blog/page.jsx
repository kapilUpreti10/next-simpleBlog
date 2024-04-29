import React from 'react'
import PostCard from '@/components/postCard/postCard'


const getData=async ()=>{
  const response =await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data=response.json();
  return data;
  }

const page = async() => {
  const data= await getData();
  //console.log(data);
  return (
    <div>
      {
        data.map((post)=>(
             <PostCard key={post.id} item={post}/>
        ))
      }
      
    </div>
  )
}

export default page

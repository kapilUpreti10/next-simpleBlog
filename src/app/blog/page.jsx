import React from 'react'
import PostCard from '@/components/postCard/postCard'
//import { getPosts } from '@/lib/data';
import { getPosts } from '@/lib/dbData';

// getting data from the api
const getData=async ()=>{
  // const response =await fetch("https://jsonplaceholder.typicode.com/posts");
  // if(!response.ok){
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }
  // const data=response.json();
  // return data;

  }




const page = async() => {
  // using api
 //const datas= await getData();
  //console.log(data);

  // without api ie hard coded data
  // const data=await getPosts();

  // using databases
        const datas= await getPosts();

  return (
    <div>
      {
        datas.map((post)=>(
             <PostCard key={post.id} item={post}/>
        ))
      }
      
    </div>
  )
}

export default page

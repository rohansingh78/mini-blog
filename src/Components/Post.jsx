import axios from 'axios';
import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const {slug} = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`https://mern-blog-19az.onrender.com/api/posts/post/${slug}`).then(function (response){
      setPost(response.data.data);
    })
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="m-5 md:ml-20 lg:mr-20 ml-5 mr-5">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={post.thumb}
            alt={post.title}
            className="h-96 w-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded">
            <p className="text-sm">{post.authorName}</p>
            <p className="text-sm">{post.time}</p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold">{{__html:post.title}}</h3>
          {/* <p className="text-gray-600 mt-2">{post.desc}</p> */}
          <p className="mt-4">{post.post}</p>
        </div>
      </div>
    </div>
  );
}

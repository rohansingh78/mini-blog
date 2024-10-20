import axios from 'axios';
import{ React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure this import is correct

export default function RecentsPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://mern-blog-19az.onrender.com/api/posts/all-posts')
      .then(function (response) {
        setPosts(response.data.posts);
      })
      .catch(function (e) {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="m-5 md:ml-20 lg:mr-20 ml-5 mr-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link to={`/post/${post.slug}`} key={post.id}>
            <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={post.thumb}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded">
                  <p className="text-sm">{post.authorName}</p>
                  <p className="text-sm">{post.time}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{post.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

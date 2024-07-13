
import Layout from "../components/Layout";
import Post from '../components/Post';
import {useParams} from 'react-router-dom';
import posts from '../api/posts';

export default function AuthorPage () {

  let params = useParams();

  let post = posts.find(function (post) {
    return post.author.username === params.username;
  });

  return (
    <Layout>
        <h1>Author: {post.author.name}</h1>
    </Layout>
  );
}
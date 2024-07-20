import PostHeader from './../components/PostHeader';
import PostBody from './../components/PostBody';
import Layout from './../components/Layout';
import Post from '../components/Post';
import posts from '../api/posts';
import users from '../api/users';
import { useLocation } from 'react-router-dom';

function Search() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let query = searchParams.get('query');

    const postsFiltered = posts.filter(function (post) {
        query = query.toLocaleLowerCase();
        return post.title.toLocaleLowerCase().includes(query);
    });

    return (
        <>
            <Layout>
                
                <h2>Resultado: </h2>

                { postsFiltered.map(function(post) {
                    
                    let user = users.find(function(user) {
                        return user.id === post.user_id;
                    });

                    return (
                        <Post key={post.id}>
                            <PostHeader 
                                authorName={user.name} 
                                authorProfile={user.profile_path}
                                postDate={post.date}
                                authorUsername={user.username} 
                            />
                            <PostBody 
                                content={post.content}
                                title={post.title} 
                                slug={post.slug} 
                                image={post.image_path}
                            />
                        </Post>
                    );
                })}
            </Layout>
        </>
    );
}

export default Search;

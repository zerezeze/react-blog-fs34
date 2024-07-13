import PostHeader from './../components/PostHeader';
import PostBody from './../components/PostBody';
import Layout from './../components/Layout';
import Post from '../components/Post';

function App() {
    return (
        <>
            <Layout showSideBar>
                <Post>
                    <PostHeader />
                    <PostBody />
                </Post>
            </Layout>
        </>
    );
}

export default App;

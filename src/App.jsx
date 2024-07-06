import Header from './components/Header';
import FormBase from './components/FormBase';
import PostHeader from './components/PostHeader';
import PostBody from './components/PostBody';
import Tags from './components/Tags';
import Latest from './components/Latest';

function App() {
    return (
        <>
            <Header className="flex items-center p-3 shadow-md">
                <h1 className="ml-5 font-bold text-2xl">FS34Blog</h1>
                <FormBase className="ml-5">
                    <input type="text" className="border px-2 py-1 rounded" />
                    <button className="border rounded border-black px-2 py-1 ml-2">Pesquisar</button>
                </FormBase>
            </Header>
            <div className='grid grid-cols-12 gap-8 p-10'>
                <div className='col-span-8 flex flex-col items-end'>
                    <div>
                        <PostHeader />
                        <PostBody />
                    </div>
                </div>
                <div className='col-span-4 flex flex-col items-start'>
                    <div>
                    <Tags />
                    <Latest />
                    </div>
                </div>
                    
            </div>
            

        </>
    );
}

export default App;

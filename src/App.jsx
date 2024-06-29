import Header from './components/Header';
import FormBase from './components/FormBase';

function App() {
    return (
        <Header className="bg-blue-500 flex p-3">
            <h1 className="ml-5">FS34Blog</h1>
            <FormBase className="ml-5">
                <input type="text" />
            </FormBase>
        </Header>
    );
}

export default App;

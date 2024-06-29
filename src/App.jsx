
function Header({ children, className }) {
    return (
        <header className={className}>
                {children}
        </header>
    )
}

function FormBase({methodPost, sendTo, className, children}) {
    return (
        <form action={sendTo} method={methodPost ? 'POST' : 'GET'} className={className}>
            {children}
        </form>
    )
}

function HeaderSearch() {
    return (
        <a href={href} className="font-semibold leading-6 ml-5 text-black">{children}</a>
    )
}

function App() {
    return (
        <Header className="bg-red-300">
            <FormBase>
                
            </FormBase>
        </Header>
    );
}

export default App


function Header({children}) {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex items-center p-6 shadow-md">
                {children}
            </nav>
        </header>
    )
}

function FormBase() {
    return (
        <form action="#" method="POST">
            <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" class="block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
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
        <>
            <FormBase></FormBase>
           
        </>
    );
}

export default App


const Header = () => {
    return (
        <header className='flex justify-between h-10 p-3 px-6'>
            <h1>
                Sniput
            </h1>
            <div className='flex gap-2'>
                <nav>
                    About
                </nav>
                <nav>
                    History
                </nav>
            </div>
        </header>
    )
}

export default Header
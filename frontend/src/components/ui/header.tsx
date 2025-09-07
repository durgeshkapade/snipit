import { Link } from "react-router-dom"
import { Button } from "./button"

const Header = () => {
    return (
        <header className='flex justify-between h-fit p-3 px-6 border shadow'>
            <h1
                className="text-5xl font-extrabold             tracking-tight             text-transparent             bg-clip-text             bg-gradient-to-r             from-purple-400             via-pink-500             to-red-500            transform             transition-transform             duration-300             ease-in-out             group-hover:scale-105          "            >
                Snipit
            </h1>
            <div className='flex gap-2'>
                <Button variant={"ghost"}>
                    About
                </Button>
                <Link to={'/history'}>
                    <Button variant={"ghost"}>
                        History
                    </Button>
                </Link>
            </div>
        </header>
    )
}

export default Header
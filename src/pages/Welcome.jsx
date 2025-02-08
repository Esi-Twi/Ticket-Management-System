import { Link } from "react-router-dom";


function Welcome() {
    return (
        <section className="h-screen center flex-col">
            <p className="font-bold text-lg">Welcome to</p>
            <h1 className="text-xl med:text-4xl text-green-900 sm:text-5xl font-bold">Curdearm Bank Plc</h1>
            <p className="text-gray-600 text-lg mb-5">Log in as:</p>
            <div className="flex gap-3">
                <Link to='/customer' className="bg-yellow-500 text-white rounded hover:shadow-md center w-[6rem] h-[2rem] hover:shadow-black">Customer</Link>

                <Link to='/admin-login' className="bg-yellow-500 text-white rounded hover:shadow-md center w-[4rem] med:w-[6rem] h-[2rem] hover:shadow-black">Admin</Link>
            </div>
        </section>
    )
}

export default Welcome;
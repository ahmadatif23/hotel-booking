const Navbar = () => {
  return (
    <div className="bg-sky-700 flex items-center justify-center">
        <div className="container flex items-center justify-between py-4">
            <span className="text-white tracking-widest text-xl font-semibold">BooKit</span>
            
            <div className="flex gap-2">
                <button className="px-4 py-2.5 rounded-md bg-white text-sky-800 tracking-wider text-sm">Register</button>
                <button className="px-4 py-2.5 rounded-md bg-white text-sky-800 tracking-wider text-sm">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
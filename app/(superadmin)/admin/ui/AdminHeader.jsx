"use client"
const AdminHeader = () => {
    const handleLogout = async() => {
        await signOut();
    }
  return (
    
    <header className="py-2 px-3 w-full flex">
        <div className="w-full flex  flex-1 justify-between items-center">
            <a href="#" className="text-gray-900 text-xl font-bold">Admin Panel</a>
        </div>
        <nav className="text-gray-900">
            <ul className="">
                <a href="#" className="hover:underline px-3 py-2">Home</a>
                <button onClick={handleLogout} className="text-gray-600 hover:underline hover:text-gray-900 px-3 py-2">Logout</button>
                
            </ul>
        </nav>
    </header>
  )
}

export default AdminHeader
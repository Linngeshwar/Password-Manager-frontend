import { cookies } from "next/headers";

export default function Logout(){
    const handleLogout = async () => {
        const cookieStore = await cookies()
        cookieStore.getAll().forEach(cookie => {
            console.log(cookie);
        });
    }

    return(
        <>
            <button 
                style={{cursor:"none"}} 
                id="invis" 
                className="px-10 py-2 flex flex-row border-white border-[3px] rounded-lg  hover:scale-110 hover:bg-white hover:text-black 
                focus:outline-none focus:shadow-md place-self-start font-press-start focus:shadow-white transition-all duration-300 ease-in-out invis"
                onClick={handleLogout}
            >
                Logout
            </button>
        </>
    )
}
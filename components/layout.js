import ProfileSideBar from "./ProfileSideBar"
import Navbar from "./navbar"

export default function Layout({children }) {
    return (
        <div className={
            "min-w-screen min-h-screen dark:bg-[#282828] bg-white dark:text-white justify-center align-middle justify-items-center"
          }>
            <Navbar />
            <ProfileSideBar />
            <main>
                {children}
            </main>
        </div>
    )
}
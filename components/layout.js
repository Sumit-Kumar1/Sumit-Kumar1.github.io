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
                <p className={"fixed bottom-[47.2%] -rotate-90 z-1 -right-20 justify-items-center"}
                >
                    @Copyrights to Sumit Kumar (2022)
                </p>
                {children}
            </main>
        </div>
    )
}
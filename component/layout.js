import Link from "next/link";


export default function Layout({children}) {
    return (
        <div className="navBar">
            <div>
                 <nav className="navigation-div">
                    <h1 className="site-title">SprintTrack</h1>
                    <div className="navLink">
                        <Link href='/'>Home</Link>
                    </div>
                    <div className="navLink">
                        <Link href='/login'>Sign In</Link>
                    </div>
                  </nav>
            </div>
           
        
        {children}

        <footer>
            
        </footer>
        </div>
    )
}
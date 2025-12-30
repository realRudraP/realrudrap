import './Sidebar.css'
export default function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="sidebar-inner">
                <div className="sidebar-header">
                    <p className="name">Rudra Ponkshe</p>
                    <p className="role">cs student @ nfsu</p>
                </div>

                <nav className="sidebar-nav">
                    <a href="#home" >~/</a>
                    <a href="#projects">projects/</a>
                    <a href="#blog">blog/</a>
                    <a href="#gpg">.gnupg/</a>
                </nav>
            </div>
        </aside>
    )
}
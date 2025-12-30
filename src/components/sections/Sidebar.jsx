import './Sidebar.css'
export default function Sidebar({activeSection,setActiveSection}){
    const sections = [
        {id:"home", label: "~/"},
        {id:"projects",label:"projects/"},
        {id:"blog", label:"blog/"},
        {id:"gpg",label:".gnupg/"}
    ];
    return(
        <aside className="sidebar">
            <div className="sidebar-inner">
                <div className="sidebar-header">
                    <p className="name">Rudra Ponkshe</p>
                    <p className="role">cs student @ nfsu</p>
                </div>  

                <nav className="sidebar-nav">
                    {sections.map((section)=>(
                        <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={
                            activeSection === section.id
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => setActiveSection(section.id)}
                        >
                            {section.label}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
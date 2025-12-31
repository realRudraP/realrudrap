import React from "react";
import { Terminal } from "lucide-react";
import "./Header.css"

export default function Header() {
  return (
    <header>
  <div className="header-left">
    <Terminal size={16} />
    <span className="path">~/portfolio</span>
  </div>

  <div className="header-center">
    <span className="mobile-name">Rudra Ponkshe</span>
  </div>

  <div className="header-right">
    <span className="status">Last updated: 2 days ago</span>
  </div>
</header>

  );
}

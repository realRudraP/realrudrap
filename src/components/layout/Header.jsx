import React from "react";
import { Terminal } from "lucide-react";
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className="header-left">
      <Terminal/>
      <p className="path">~/portfolio</p>
    </div>
      <p className="status">Last updated: 2 days ago</p>
    </header>
  );
}

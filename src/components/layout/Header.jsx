import React from "react";
import { Terminal } from "lucide-react";
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div class="header-left">
      <Terminal/>
      <p class="path">~/portfolio</p>
    </div>
      <p class="status">Last updated: 2 days ago</p>
    </header>
  );
}

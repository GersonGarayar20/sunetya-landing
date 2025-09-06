import React from "react";
import { Menu } from "./menu";

export default function Navbar() {
  return (
    <div className="border-b">
      <section className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-2">
        <h1>Sunetya</h1>

        {/* enlaces */}
        <Menu />
        <a href="#">Contactanos</a>
      </section>
    </div>
  );
}

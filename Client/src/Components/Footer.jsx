import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; Personal Money Manager
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <button className="text-xs hover:underline underline-offset-4">
          Services
        </button>
        <button className="text-xs hover:underline underline-offset-4">
          Plan your finances
        </button>
      </nav>
    </footer>
  );
};

export default Footer;

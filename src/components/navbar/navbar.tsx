import Logo from "./logo";
import UserMenu from "./user-menu";

export default function Navbar() {
  return (
    <nav className="flex px-6 md:px-9 lg:px-24 py-4 items-center justify-between border-b border-silver-tree-500
    ">
        <Logo />
        <UserMenu />
    </nav>
  )
}
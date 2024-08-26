import Link from "next/link";
import Toogle from "@/components/toggle";
export default function Header() {
  return (
    <>
      <div className="top-0 fixed flex justify-center p-8 w-screen">
        <div className="">
          <Toogle />
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutMe">About</Link>
            </li>
            <li>
              <Link href="/technologies">Technologies</Link>
            </li>
            <li>
              <Link href="https://blog.jonhathanrodas.com">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

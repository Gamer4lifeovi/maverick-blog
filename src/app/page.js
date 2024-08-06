import Image from "next/image";

export default function Home() {
  return (
    <nav className="flex w-full flex-row items-center justify-between pt-5 pl-2">
      <div className="flex ">
        <h1 className="text-3xl">Maverick Blog</h1>
        <img src="/2.png" alt=""  className="w-8"/>
      </div>
      <div className="pr-5 justify-between">
      <a href="#">About Us</a>
      <a href="#">Blogs</a>
      <a href="#">Pricing</a>
      <a href="#">Sign-in</a>
      <a href="#">Register</a>
      </div>
    </nav>
  )
  }
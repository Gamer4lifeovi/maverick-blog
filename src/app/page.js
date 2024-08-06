import Image from "next/image";

export default function Home() {
  return (
    <nav>
      <div className="">
        <h1>Maverick Blog</h1>
        <img src="/2.png" alt="" />
      </div>
      <div>
      <a href="#">About Us</a>
      <a href="#">Blogs</a>
      <a href="#">Pricing</a>
      <a href="#">Sign-in</a>
      <a href="#">Register</a>
      </div>
    </nav>
  )
  }
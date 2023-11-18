import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>This is main home page</h1>
      <Link href='/dashboard' >Dashbaord</Link>
    </main>
  )
}

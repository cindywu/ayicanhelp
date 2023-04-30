import Link from 'next/link'
export default function Header() {
  return (
    <div className={"flex"}>
      {/* TODO: host image directly in repo */}
      <Link href="/"><img src="https://i0.wp.com/ayicanhelp.org/wp-content/uploads/2021/01/cropped-AYI_logo2-e1612823910614-1.png?w=512&ssl=1" alt="ayi logo"></img></Link>
      <div className={"px-4"}>
        <div className={"text-xl text-gray-600"}><span className={"font-bold text-black"}>Ayi Can Help —</span> Our mission is to serve those who are going through lifetime hardships and provide emergency relief to individuals and families in need.</div>
        <div className={"py-4 flex gap-4 text-sky-800 text-xl font-bold cursor-pointer"}>
          <Link href="/donate">Donate</Link>
          <div>Projects</div>
          <Link href="/volunteers-calendar">Calendar</Link>
        </div>
      </div>
    </div>
  )
}
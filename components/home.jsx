import React from 'react'
import Link from 'next/link'
import Header from './header'

export default function Home() {
  return (
    <div className={"max-w-md p-4 pt-10"}>
      <Header/>
      <img className={"py-10"} src="https://i0.wp.com/ayicanhelp.org/wp-content/uploads/2021/01/AYI_Visual-e1612149946765-1024x380.png?resize=640%2C237&ssl=1"></img>
      <Award/>
      <Content/>
    </div>
  )
}

function Award() {
  return (
    <div className={"grid justify-items-center p-10"}>
      <div className={"py-4 capitalize text-2xl font-bold text-sky-800"}>2023 biggest heart award</div>
      <img className={"w-80 h-80 rounded-full"}src="https://i0.wp.com/ayicanhelp.org/wp-content/uploads/2023/04/IMG_2797.jpg?resize=640%2C696&ssl=1"></img>
    </div>
  )
}

function Content() {
  return (
  <div>
    <div className={"flex flex-col gap-4"}>
      <img src="https://i0.wp.com/ayicanhelp.org/wp-content/uploads/2023/04/unknown-COLLAGE-1.jpg?w=1063&ssl=1"></img>
      <p>Special thanks to these three high school girls, Josefine Liau, Erin Liau, and Annching Zhang. We would like to report that this year, Ms. Zoe Tseng participated in an event to help Ayi raise $4000. With the additional support from the Chen & Lin family and ACLA, we were able to provide Thanksgiving dinners for 25 Baltimore families and 10 Fairfax victim service families.</p>
      <img src="https://i0.wp.com/ayicanhelp.org/wp-content/uploads/2023/03/20221121_133209-1-scaled.jpg?w=1280&ssl=1"></img>
      <Link href="/thanksgiving-2002">Thanksgiving baskets for family in need</Link>
      <p>We helped nearly 300 underprivileged children back to school, spanning across MD, VA, WA and overseas.</p>
      <img src="https://i0.wp.com/ayicanhelp.org/wp-content/uploads/2023/03/IMG_2172-COLLAGE.jpg?w=1280&ssl=1"></img>
      <p>We team with the Refugee Women’s Alliance (ReWA), Seattle WA assisting refugees teens in their pursuit of education without worry and help them become independent.</p>
      <div className={"flex gap-4"}>
        <img className={"w-1/2"} src="https://i0.wp.com/ayicanhelp.org/wp-content/uploads/2023/04/image006.jpg?w=480&ssl=1z"></img>
        <img className={"w-1/2"}src="https://i0.wp.com/ayicanhelp.org/wp-content/uploads/2023/04/IMG_3579.jpg?w=1280&ssl=1"></img>
      </div>

      <p>Through the help from all of our volunteers, the money from cash donations and recycled items donations all contributed to the cause for people in need. It enabled us to not only help the local people but also to help the international orphans and children in need.</p>
      <p>The effect of our “little steps”, through sharing and giving, is enormous. We truly do make a difference in the society and hopefully everyone is keeping up with the good work.</p>
      <p>If you have ever made a donation to charity groups, you might understand that not every institute is willing to take the time to write thank-you letters or to issue donation receipts to you. Often times they take a while to mail donation receipts to you.</p>
      <p>Since we emphasized that we don’t have overhead of any administrative expenses, all our volunteers who are involved in the charity cases are “100% volunteered” – meaning that not one cent goes to as the administration fees. All the gas money comes right out from our own pockets, and our financials are open and transparent in public. Our volunteers, as always, try their best to get the donation receipt(s) as soon as they receive the donations.</p>
      <p>We post on the website regularly, keeping our readers updated on where all the donations go. If you have questions, please email to <strong>Ayi Can Help</strong> at <Link href="mailto:ayicanhelp@gmail.com">ayicanhelp@gmail.com</Link> directly for verification.</p>
    </div>
  </div>
  )
}
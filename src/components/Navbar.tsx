import Link from "next/link";
import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link href = "/" className="navbar__logo">
          nextmap
        </Link>
        <div className="navbar__list">
          <Link href="/store" className="navbar__list__item">
            맛집 목록
          </Link>
          <Link href="/store/new" className="navbar__list__item">
            맛집 등록
          </Link>
          <Link href="/users/likes" className="navbar__list__item">
            찜한 가게
          </Link>
          <Link href="/users/login" className="navbar__list__item">
            로그인
          </Link>
        </div>
        {/* mobile button*/}
        <div role="presentation" className="navbar__button" onClick={()=>setIsOpen((val)=>!val)}
        >
          {isOpen ? <AiOutlineClose/> : <BiMenu/>} 
        </div>
      </div>
      {/* mobile navbar*/}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list--mobile">
          <Link href="/store" className="navbar__list__item--mobile">
            맛집 목록
          </Link>
          <Link href="/store/new" className="navbar__list__item--mobile">
            맛집 등록
          </Link>
          <Link href="/users/likes" className="navbar__list__item--mobile">
            찜한 가게
          </Link>
          <Link href="/users/login" className="navbar__list__item--mobile">
            로그인
          </Link>
        </div>
        </div>
      )}
    </>
  )
}
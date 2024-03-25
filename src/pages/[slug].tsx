import Link from "next/link"
import {useRouter} from "next/router"

export default function page(){
  const router = useRouter();
  return (
    <div>
      <h1>Page : {router.query.slug}</h1>
      <div>
        <button
            type="button"
            onClick={()=>{
            router.push({pathname: '/[slug]', query: {slug: "push"}});
            }}
            >
            PUSH
          </button>
      </div>
      <br />
      <div>
        <button
            type="button"
            onClick={()=>{
            router.replace({pathname: '/[slug]', query: {slug: "push"}});
            }}
            >
            Replace
          </button>
      </div>
      <br />
      <div>
        <button
            type="button"
            onClick={()=>{
            router.reload();
            }}
            >
            reload
          </button>
      </div>
      <br/>
      <div>
        <Link href="/hello">HEllo</Link>
        <br/>
        <Link href="/bye">bye</Link>
      </div>
    </div>
   
  )
}
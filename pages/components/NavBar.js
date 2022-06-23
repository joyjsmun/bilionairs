import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const {route} = useRouter()
    
    return (
        <div className="NavBar">
           <Link href="/"><h2>Home</h2></Link>
           <Link href="/about"><h2>About</h2></Link>
           <style jsx>{`
                .NavBar{
                    cursor:pointer;
                    width:100%;
                    height: 100px;
                    display:flex;
                    gap:100px;
                    padding:10px;
                    justify-content: center;
                    align-items: center;
                    background: rgb(0,0,0);
                    border-bottom:1px solid rgba(82, 51, 158, 1);
                    position:fixed;
                    top:0;
                }
                h2{
                    color: white !important;
                    text-decoration: none;
                    font-weight:700;
                }
           `}</style>
        </div>
        )
}
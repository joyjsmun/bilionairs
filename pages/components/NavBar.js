import Link from "next/link";

export default function NavBar(){
    return (
        <div className="NavBar">
           <Link href="/"><h3>Home</h3></Link>
           <Link href="/about"><h3>About</h3></Link>
           <style jsx>{`
                .NavBar{
                    width:100%;
                    height: 100px;
                    display:flex;
                    gap:30px;
                    padding:10px;
                    justify-content: center;
                    align-items: center;
                    background: rgb(0,0,0);
                    border-bottom:1px solid rgba(82, 51, 158, 1);
                    position:fixed;
                    top:0;
                }
                h3{
                    color: white !important;
                    text-decoration: none;
                    font-size: large;
                }
           `}</style>
        </div>
        )
}
import Link from "next/link";

export default function NavBar(){
    return (
        <div className="NavBar">
           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
           <style jsx>{`
                .NavBar{
                    width:100%;
                    height: 80px;
                    display:flex;
                    gap:15px;
                    padding:10px;
                    justify-content: center;
                    align-items: center;
                    background-color:tomato;
                    position:fixed;
                    top:0;
                }
           `}</style>
        </div>
        )
}
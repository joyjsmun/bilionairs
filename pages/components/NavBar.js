import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const {route} = useRouter()
    console.log(route);
    
    return (
        <div className="NavBar">
            
           <h1><img className="logo" src="/money.svg" />Billionaires</h1>
           <Link href="/">{route == "/" ? <h2 className="accent">Home<img className="logo_dot" src="/money.svg" /></h2> : <h2>Home</h2>}</Link>
           <Link href="/about">{route == "/about" ? <h2 className="accent">About<img className="logo_dot" src="/money.svg" /></h2> : <h2>About</h2>}</Link>
           <style jsx>{`
                .NavBar{
                    cursor:pointer;
                    width:100%;
                    height: 100px;
                    display:flex;
                    gap:70px;
                    padding:10px;
                    justify-content: center;
                    align-items: center;
                    background: rgb(0,0,0);
                    border-bottom:1px solid rgba(82, 51, 158, 1);
                    position:fixed;
                    top:0;
                    color: white;
                    z-index: 99;
                }

                h1{
                  display:flex;
                  align-items: center;
                  font-size: xxx-large;
                }
                .logo{
                    filter: invert(26%) sepia(15%) saturate(5482%) hue-rotate(232deg) brightness(92%) contrast(104%);
                    width: 50px;
                    margin-right:10px;
                }


                .logo_dot{
                    filter: invert(26%) sepia(15%) saturate(5482%) hue-rotate(232deg) brightness(92%) contrast(104%);
                    width: 24px;
                    height: 30px;
                    position: absolute;
                    top: 30px;
                    left: 20px;
                }


                h2{
                    color: white !important;
                    text-decoration: none;
                    font-weight:700;
                    position: relative;
                }

                .dot{
                    top:10px;
                    width: 13px;
                    height: 13px;
                    position: absolute;
                    top: 40px;
                    left:20px;
                    border-radius: 10px;
                    background: rgba(82, 51, 158, 1)
                }
           `}</style>
        </div>
        )
}
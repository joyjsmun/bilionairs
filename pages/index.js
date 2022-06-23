import Head from "next/head";
import { useEffect, useState } from "react";
import SEO from "./components/Seo";

export default function Home() {
  const [list, setList] = useState([]);

 useEffect(() => {
   (async() =>{
     const data = await(
      await fetch(`https://billions-api.nomadcoders.workers.dev/`)
     ).json();
     setList(data);
   })()
 },[])

  return (
    <div className="Wrapper">
      <SEO title="Home" />
      <div className="billionarsList">

      </div>
      <style jsx>{`
        .Wrapper{
          display: flex;
          background: yellow;
          width: 100%;
          height: 100vw;
          padding:100px;
        }

        .billionairsList{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap:10px;
          background:blue;
          width: 100%;
          height: 100px;

        }
      `}</style>
    </div>
  )
}

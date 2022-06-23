import Head from "next/head";
import { useEffect, useState } from "react";
import SEO from "./components/Seo";

const FAKEIMG = "https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800"

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
          {list?.map(item => <div className="person" key={item.id}>
            <img src={item.squareImage == "https:undefined" ? FAKEIMG : item.squareImage} />
            <div>
              <h3>{item.name}</h3>
              <div>{item.industries[0]} / {String(item.netWorth).slice(0,3)} blillion</div>
            </div>
          </div>)}
      </div>
      <style jsx>{`
        .Wrapper{
          background: yellow;
          width: 100%;
          padding:100px;
        }

        .billionarsList{
          display: grid;
          grid-template-columns: repeat(4,1fr);
          grid-gap: 20px;
          width: 100%;
          background: blue;
        }

        .person {
          width: 100%;
        }

        .person img{
          background-size: cover;
          width: 100%;
          border-radius: 20px;
          margin-bottom: 0px;
          border: 1px solid yellow;
          
        }
      `}</style>
    </div>
  )
}

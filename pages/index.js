import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SEO from "./components/Seo";

const FAKEIMG = "https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800"

export default function Home() {
  const [list, setList] = useState([]);
  const router = useRouter();


 useEffect(() => {
   (async() =>{
     const data = await(
      await fetch(`https://billions-api.nomadcoders.workers.dev/`)
     ).json();
     setList(data);
   })()
 },[])

 const personDetail = (id,name) => {
   router.push({
      pathname:`/person/${id}`,
      query:{name}
   })
 }

  return (
    <div className="Wrapper">
      <SEO title="Home" />
      <div className="billionarsList">
          {!list && <h4>...Loading</h4>}
          {list?.map(item => <div onClick={() => personDetail(item.id,item.name)} className="person" key={item.id}>
            <img src={item.squareImage == "https:undefined" ? FAKEIMG : item.squareImage} />
            <div className="desc">
              <h3>{item.name}</h3>
              <div>{item.industries[0]} / {String(item.netWorth).slice(0,3)} blillion</div>
            </div>
          </div>)}
      </div>
      <style jsx>{`
        .Wrapper{
          background: yellow;
          width: 100%;
          padding:200px;
          background: black;

        }

        .billionarsList{
          display: grid;
          grid-template-columns: repeat(4,1fr);
          grid-gap: 30px;
          width: 100%;
          color:rgba(82, 51, 158, 1);
          
        }

        .person {
          width: 100%;
          margin-bottom:20px;
          cursor:pointer;
          background: rgba(82, 51, 158, 1);
          border-radius: 20px 20px 0px 0px;
                 }

        .person:hover{
          transform: scale(1.1);
          transition-timing-function: linear;
          transition-delay: 0.2s;
         

        }

        .desc{
          color:white;
          padding:15px;
        }
        

        .desc div{
          color:white;
        }

        .person img{
          background-size: cover;
          background-position: center center;
          width: 100%;
          border-radius: 20px 20px 0px 0px;
          margin-bottom: 0px;
          border:1px solid rgba(82, 51, 158, 1);
          
        }
      `}</style>
    </div>
  )
}

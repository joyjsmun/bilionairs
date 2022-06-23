import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Detail(){
    const [person,setPerson] = useState([]);
    const router = useRouter()
    useEffect(()=>{
        (async()=>{
            const data = await(
                await fetch(`https://billions-api.nomadcoders.workers.dev/person/${router.query.id}`)
            ).json()
            setPerson(data);
            console.log(data)
        })()
    },[])

    return (
        <div className="Wrapper">
            <div className="container">
                <img src={person?.squareImage} />
                <h2>{router.query.name}</h2>
                <h4>Networth:{String(person?.netWorth).slice(0,3)} billion</h4>
                <h4>Country:{person?.country}</h4>
                <h4>Industry:{person?.industries? person.industries[0] : null }</h4>
                <p>{person?.bio?.map(content => <span key={content.length}>{content}</span>)}</p>
            </div>
            <div className="container">
                <h2 className="assetsTitle">Financian Assets</h2>
               <div className="assetsKind">
               {person.financialAssets?.map(item => <div className="ticker" key={item.companyName}>
                    <div>Ticker : {item?.ticker}</div>
                    <div>Shares : {item?.numberOfShares}</div>
                    <div>Excersie Price : ${item?.sharePrice}</div>
                </div>)}
               </div>
            </div>
            <style jsx>{`
        .Wrapper{
        background: yellow;
        width: 100%;
        padding:200px;
        background: black;
        }

        .container{
            width: 100%;
            color: white;
            padding: 50px;
            border: 1px solid rgba(82,51,158,1);
            line-height:25px;
        }

        .container:last-child{
            margin-top:100px;
            
        }

        .container img{
            margin-bottom:50px;
        }

        .assetsTitle{
            display: block;
            font-weight: 700;
            margin-bottom:30px;
        }

        .assetsKind{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap:50px;
        }

        .ticker {
            padding: 20px;
            border-radius:10px;
            border: 1px solid rgba(82,51,158,1);
        }
            `}</style>
        </div>
    )
}
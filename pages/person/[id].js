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
                <h3>{router.query.name}</h3>
                <h4>Networth:{String(person?.netWorth).slice(0,3)} billion</h4>
                <h4>Country:{person?.country}</h4>
                <h4>Industry:{person?.industries? person.industries[0] : null }</h4>
                <p>{person?.bio?.map(content => <span key={content.length}>{content}</span>)}</p>
            </div>
            <div className="assets">
                <h3>Financian Assets</h3>
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

        .container img{
            margin-bottom:50px;
        }
            `}</style>
        </div>
    )
}
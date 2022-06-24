import Head from "next/head";
import SEO from "./components/Seo";

export default function about(){
    return(
        <div className="Wrapper">
        <SEO title="About" />
        <div className="container">
            <h3> War, pandemic and sluggish markets hit the world’s billionaires this year. There are 2,668 of them on Forbes’ 36th-annual ranking of the planet’s richest people—87 fewer than a year ago. They’re worth a collective $12.7 trillion—$400 billion less than in 2021. The most dramatic drops have occurred in Russia, where there are 34 fewer billionaires than last year following Vladimir Putin’s invasion of Ukraine, and China, where a government crackdown on tech companies has led to 87 fewer Chinese billionaires on the list.
Still, Forbes found more than 1,000 billionaires who are richer than they were a year ago. And 236 newcomers have become billionaires over the past year—including the first ever from Barbados, Bulgaria, Estonia and Uruguay. America still leads the world, with 735 billionaires worth a collective $4.7 trillion, including Elon Musk, who tops the World’s Billionaires list for the first time. China (including Macau and Hong Kong) remains number two, with 607 billionaires worth a collective $2.3 trillion. We used stock prices and exchange rates from March 11, 2022 to calculate net worths. See below for the full list of the world’s billionaires and our methodology. For daily updated net worths of all 2,668 billionaires, check out our real-time billionaires rankings.
   </h3>
        </div>
        <style jsx>{`
            .Wrapper{
        background: yellow;
        width: 100%;
        padding:200px;
        background: black;
        height: 100vh;
        }

        h3:first-letter {
            text-transform: uppercase;
            font-size:xxx-large;
            color: rgba(82,51,158,1);
        }

        .container{
            width: 100%;
            color: white;
            padding: 50px;
            border: 1px solid rgba(82,51,158,1);
            line-height:40px;
            font-weight:200;
        }
            `}
        </style>
        </div>
    )
}
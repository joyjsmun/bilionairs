export default function FooterMenu(){
    return(
        <div className="footerContainer">
            <h1>Life Is Joy</h1>
            <h4>Copyright@2022 LifeIsJoy, Inc.</h4>
            <style jsx>{`
                .footerContainer{
                    display:flex;
                    flex-direction:column;
                    text-align:center;
                }
                h1{
                    margin:0;
                }
            `}</style>
        </div>
    )
}
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
                    height: 100px;
                    position: fixed;
                    bottom:0;
                    left:0;
                    right:0;
                }
                h1{
                    margin:0;
                }
            `}</style>
        </div>
    )
}
export default function FooterMenu(){
    return(
        <div className="footerContainer">
            <h1>Life Is Joy</h1>
            <h4>Copyright@2022 LifeIsJoy, Inc.</h4>
            <style jsx>{`
                .footerContainer{
                    display:flex;
                    flex-direction:column;
                    
                    position: fixed;
                    bottom:0;
                    left:0;
                    right:10;
                    color: white;
                    writing-mode: vertical-rl;
                    text-orientation: revert;
                }
                h1{
                    margin:0;
                }
            `}</style>
        </div>
    )
}
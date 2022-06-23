import FooterMenu from "./FooterMenu";
import NavBar from "./NavBar";

export default function Layout({children}){
    return (
      <div className="Wrapper">
        <NavBar />
        <div>{children}</div>
        {/* <FooterMenu /> */}
      </div>
    )
}
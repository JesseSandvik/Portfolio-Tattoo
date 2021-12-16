import HeadingOne from "../atoms/headingOne";
import Navigation from "../molecules/navigation";

const Header = ({ siteTitle }) => {
    return (
        <header>
            <HeadingOne
                siteTitle={siteTitle}
            />
            <Navigation/>
        </header>
    );
}

export default Header;
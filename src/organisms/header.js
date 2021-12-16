import HeadingOneWithQuote from "../molecules/headingOneWithQuote";
import Navigation from "../molecules/navigation";

const Header = ({ quote, siteTitle }) => {
    return (
        <header>
            <HeadingOneWithQuote
                quote={quote}
                siteTitle={siteTitle}
            />
            <Navigation/>
        </header>
    );
}

export default Header;
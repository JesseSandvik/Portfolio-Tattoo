import HeadingOneWithQuote from "../molecules/headingOneWithQuote";
import Navigation from "../molecules/navigation";

const Header = ({ pageHeading, quote }) => {
    return (
        <header>
            <HeadingOneWithQuote
                pageHeading={pageHeading}
                quote={quote}
            />
            <Navigation/>
        </header>
    );
}

export default Header;
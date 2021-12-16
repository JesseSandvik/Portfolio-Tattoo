import HeadingOne from "../atoms/headingOne";
import SmallQuote from "../atoms/smallQuote";


const HeadingOneWithQuote = ({ quote, siteTitle }) => {
    return (
        <div>
            <HeadingOne siteTitle={siteTitle}/>
            <SmallQuote quote={quote}/>
        </div>
    );
}

export default HeadingOneWithQuote;
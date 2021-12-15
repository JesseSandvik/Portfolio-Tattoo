import HeadingOne from "../atoms/headingOne";
import SmallQuote from "../atoms/smallQuote";


const HeadingOneWithQuote = ({ pageHeading, quote }) => {
    return (
        <div>
            <HeadingOne pageHeading={pageHeading}/>
            <SmallQuote quote={quote}/>
        </div>
    );
}

export default HeadingOneWithQuote;
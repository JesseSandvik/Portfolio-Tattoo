import HeadingOneWithQuote from "../molecules/headingOneWithQuote";

const HomePage = () => {
    const pageHeading = "Welcome To White Rabbt!";
    const pageHeadingQuote = "Imagination is the only weapon in the war with reality.";
    return (
        <div>
            <HeadingOneWithQuote
                pageHeading={pageHeading}
                quote={pageHeadingQuote}
            />
        </div>
    );
}

export default HomePage;
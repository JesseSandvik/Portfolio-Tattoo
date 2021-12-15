import Header from "../organisms/header";

const HomePage = () => {
    const pageHeading = "Welcome To White Rabbt!";
    const pageHeadingQuote = "Imagination is the only weapon in the war with reality.";
    return (
        <div>
            <Header
                pageHeading={pageHeading}
                quote={pageHeadingQuote}
            />
        </div>
    );
}

export default HomePage;
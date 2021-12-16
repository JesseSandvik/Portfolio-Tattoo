import Header from "../organisms/header";
import PageRoutes from "../routes/pageRoutes";

const Layout = () => {
    const siteTitleQuote = `"Imagination is the only weapon in the war with reality." - The Cheshire Cat`;
    const siteTitle="White Rabbt.";
    return (
        <section>
            <Header
                quote={siteTitleQuote}
                siteTitle={siteTitle}
            />
            <PageRoutes/>
        </section>
    );
}

export default Layout;
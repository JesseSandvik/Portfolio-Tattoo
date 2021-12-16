import Footer from "../organisms/footer";
import Header from "../organisms/header";
import PageRoutes from "../routes/pageRoutes";

const Layout = () => {
    const siteTitle="Miss Tattoo Tara";
    return (
        <>
            <Header
                siteTitle={siteTitle}
            />
            <main>
                <PageRoutes/>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
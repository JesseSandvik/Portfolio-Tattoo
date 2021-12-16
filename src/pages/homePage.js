import ModalWithParagraph from "../molecules/modalWithParagraph";

const HomePage = () => {
    const homePageText = [
        "Tattoos for some are a way to celebrate our greatest achievements & milestones.",
        "For others, they are an somber expression of mourning, grief, & commemoration.",
        "My place in this world is to help you express yourself, through life, loss, & everything inbetween.",
        "My name is Miss Tattoo Tara.",
        "Let's make something great together."
    ];
    return (
        <div>
            <ModalWithParagraph
                pageText={homePageText}
            />
        </div>
    );
}

export default HomePage;
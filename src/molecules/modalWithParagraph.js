import Modal from "../atoms/modal";
import Paragraph from "../atoms/paragraph";

const ModalWithParagraph = ({ pageText }) => {
    const pageTextList = pageText.map((text, index) => <li key={index}><Paragraph text={text}/></li>)
    return (
        <div className="modal-p">
            <Modal/>
            {pageTextList}
        </div>
    );
}

export default ModalWithParagraph;
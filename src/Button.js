import PropTypes from "prop-types";
import myStyle from "./Button.module.css";

function Btn({title}){
    return(
        <button className={myStyle.btn}>
            {title}
        </button>
    )
}

Btn.prototype = {
    title: PropTypes.string.isRequired,
};

export default Btn;
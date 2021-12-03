import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Palette = (props) => {
    const [color, setColor] = useColor("hex", props.color);
    const sendColor = (e) => {
        var okBool = !props.colorBool;
        props.handleColor([color.hex, okBool]);
    }
    const cancel = (e) => {
        var okBool = !props.colorBool;
        props.handleColor([props.color, okBool]);
    }
    return ( 
            <>
                <ColorPicker 
                    width={300} 
                    height={200} 
                    color={color}
                    onChange={setColor} 
                    hideHSV hideRGB hideHEX dark 
                />
                <div className="color-buttons">
                    <a className="ok-button" href="#" onClick={sendColor}>OK</a>
                    <a className="cancel-button" href="#" onClick={cancel}>Cancel</a>
                </div>
                
            </>
        );
};

export default Palette;
import React, { useState } from 'react';

const EventRegistrationForm = () => {
    const [inputText, setInputText] = useState('');
    const [inputColor, setInputColor] = useState('#179edd');
    const [fontSize, setFontSize] = useState(16);
    const [fontWeight, setFontWeight] = useState('normal');
    const [fontStyle, setFontStyle] = useState('normal');
    const [textContent, setTextContent] = useState('');
    const [textColor, setTextColor] = useState('#000');

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    };

    const handleColorChange = (e) => {
        setInputColor(e.target.value);
    };

    const applyText = () => {
        setTextContent(inputText);
    };

    const setColor = () => {
        setTextColor(inputColor);
    };

    const toggleBold = () => {
        setFontWeight(fontWeight === 'bold' ? 'normal' : 'bold');
    };

    const toggleCapitalize = () => {
        setTextContent(textContent === textContent.toUpperCase() ? textContent.toLowerCase() : textContent.toUpperCase());
    };

    const toggleItalic = () => {
        setFontStyle(fontStyle === 'italic' ? 'normal' : 'italic');
    };

    const clearText = () => {
        setTextContent('');
    };

    const applyFontSize = () => {
        setFontSize(document.getElementById('fontSize').value);
    };

    return (
        <div className="container">
            <div className="header">Text editor</div>

            <div className="form-container">
                <div className="ino">
                    <label htmlFor="inputText">ENTER THE TEXT</label>
                    <input
                        type="text"
                        className="textarea"
                        id="inputText"
                        name="inputText"
                        placeholder="put text here"
                        value={inputText}
                        onChange={handleTextChange}
                    />
                    <button onClick={applyText}>edit</button><br />
                    <label htmlFor="inputColor">color</label>
                    <input
                        type="color"
                        id="inputColor"
                        name="colorPicker"
                        value={inputColor}
                        onChange={handleColorChange}
                    />
                    <button onClick={setColor}>set color</button>
                </div>
                <div>
                    <div className="get">
                        <p
                            id="idnum"
                            className="tex"
                            style={{
                                color: textColor,
                                fontWeight: fontWeight,
                                fontStyle: fontStyle,
                                fontSize: `${fontSize}px`,
                            }}
                        >
                            {textContent}
                        </p>
                    </div>
                </div>
                <div>
                    <button onClick={toggleBold}>
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/text-bold-1024.png"
                            alt="Bold"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                    <button className="color-btn" onClick={setColor} style={{ backgroundColor: inputColor }}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/design_graphic_sign_icon_symbol-1024.png"
                            alt="Color"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                    <button onClick={toggleCapitalize}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/editorial-6/24/editorial_capitalize-512.png"
                            alt="Capitalize"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                    <button onClick={toggleItalic}>
                        <img
                            src="https://th.bing.com/th/id/OIP.-8ZVSul64OQi6cFETQ0MsAHaHa?rs=1&pid=ImgDetMain"
                            alt="Italic"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                    <button onClick={clearText}>
                        <img
                            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215028/eraser-icon-md.png"
                            alt="Clear"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>

                    <label htmlFor="fontSize">Select Font Size: </label>
                    <input
                        type="number"
                        id="fontSize"
                        name="fontSize"
                        min="10"
                        max="72"
                        defaultValue="16"
                        onChange={(e) => setFontSize(e.target.value)}
                    />
                    <button onClick={applyFontSize}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default EventRegistrationForm;

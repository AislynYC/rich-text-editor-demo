import { useState } from "react";
import RichTextEditor from "./components/RichTextEditor";
import { Input } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const { TextArea } = Input;

const App = () => {
  const [htmlInputValue, setHtmlInputValue] = useState();
  const [htmlOutputValue, setHtmlOutputValue] = useState();

  const handleEditorOnChange = (value) => {
    setHtmlOutputValue(value);
  };

  const handleInputOnChange = (e) => {
    setHtmlInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <RichTextEditor value={htmlInputValue} onChange={handleEditorOnChange} />
        <div className="html-inputs">
          <TextArea
            rows={10}
            placeholder="HTML Input"
            value={htmlInputValue}
            onChange={handleInputOnChange}
          />
          <TextArea rows={10} placeholder="HTML Output" value={htmlOutputValue} />
        </div>
      </div>
    </div>
  );
};

export default App;

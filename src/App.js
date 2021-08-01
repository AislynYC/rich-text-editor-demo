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
          HTML Input
          <TextArea
            rows={9}
            placeholder="Input your HTML here to be the initial value of the editor."
            value={htmlInputValue}
            onChange={handleInputOnChange}
          />
          HTML Output
          <TextArea rows={9} value={htmlOutputValue} />
        </div>
      </div>
    </div>
  );
};

export default App;

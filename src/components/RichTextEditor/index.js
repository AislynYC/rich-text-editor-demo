import React, { useState, useEffect } from "react";
import { emojis, controls, defaultColorOptions } from "./configs";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import "./index.css";

const RichTextEditor = ({
  onChange,
  value,
  disabled,
  colorOptions,
  enableToolbarOptions,
  ...otherProps
}) => {
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(value));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    typeof onChange === "function" && onChange(editorState.toHTML());
  };

  useEffect(() => {
    setEditorState(BraftEditor.createEditorState(value));
  }, [value]);

  return (
    <div className="wrapper">
      <BraftEditor
        value={editorState}
        onChange={onEditorStateChange}
        className="rich-text-editor"
        contentClassName="editorContent"
        controls={enableToolbarOptions || controls}
        language="zh-hant"
        colors={colorOptions || defaultColorOptions}
        emojis={emojis}
        stripPastedStyles={true}
        textBackgroundColor={false}
        readOnly={disabled}
        extendControls={[
          {
            key: "description",
            type: "component",
            component: (
              <Tooltip
                title={"Hi 你們好！"}
                className="descriptionIcon"
                placement="bottom">
                <QuestionCircleOutlined />
              </Tooltip>
            ),
          },
        ]}
        {...otherProps}
      />
    </div>
  );
};

RichTextEditor.propTypes = {
  colorOptions: PropTypes.array, //an array of hex color
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  enableToolbarOptions: PropTypes.array,
};

export default RichTextEditor;

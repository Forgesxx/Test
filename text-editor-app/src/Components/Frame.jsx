import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import Sidebar from "./Sidebar";
import "./Frame.less";

const Frame = () => {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Underline, Strike, Code],
    content: "<p></p>",
  });

  return (
    <div className="frame">
      <Sidebar editor={editor} />
      <div className="container">
        <EditorContent editor={editor} className="editor" />
      </div>
    </div>
  );
};

export default Frame;

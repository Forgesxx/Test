import React from "react";
import { FiGlobe, FiUser, FiMoon, FiSun, FiZap, FiMessageSquare, FiStar, FiTag, FiLink, FiRefreshCw, FiSettings } from "react-icons/fi";
import "./Sidebar.less";

const Sidebar = ({ editor, isDarkMode, toggleTheme }) => {
  if (!editor) return null;

  return (
    <div className="sidebar">
      {/* Значок планеты */}
      <button>
        <FiGlobe />
      </button>

      <hr />

      {/* Значок аватара */}
      <button>
        <FiUser />
      </button>

      {/* Переключение темы */}
      <button onClick={toggleTheme}>
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>

      <hr />

      {/* Кнопка с фичами ИИ */}
      <button>
        <FiZap />
      </button>

      {/* Кнопка с диалоговым окном */}
      <button>
        <FiMessageSquare />
      </button>

      {/* Кнопка со звездочкой */}
      <button>
        <FiStar />
      </button>

      {/* Кнопка с биркой */}
      <button>
        <FiTag />
      </button>

      <hr />

      {/* Непонятная кнопка */}
      <button>
        ❓
      </button>

      {/* Наши кнопки */}
      <button className={editor.isActive("bold") ? "active" : ""}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}>
        <b>B</b>
      </button>
      <button className={editor.isActive("italic") ? "active" : ""}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}>
        <i>I</i>
      </button>
      <button className={editor.isActive("underline") ? "active" : ""}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}>
        <u>U</u>
      </button>
      <button className={editor.isActive("strike") ? "active" : ""}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}>
        <s>S</s>
      </button>
      <button className={editor.isActive("code") ? "active" : ""}
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}>
        {"</>"}
      </button>

      {/* Кнопка вставки ссылки */}
      <button>
        <FiLink />
      </button>

      <hr />

      {/* Переводчик */}
      <button>
        <FiRefreshCw />
      </button>

      {/* Непонятная кнопка */}
      <button>
        ❓
      </button>

      <hr />

      {/* Кнопка персонализации */}
      <button>
        <FiSettings />
      </button>
    </div>
  );
};

export default Sidebar;

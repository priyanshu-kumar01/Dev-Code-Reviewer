import React, { useEffect, useState } from 'react'
import "./Preview.css"
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import markdown from "react-markdown";
import Editor from "react-simple-code-editor";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"
import axios from "axios";
import Markdown from 'react-markdown';
import Sidebar from './Sidebar';

const Preview = () => {

  const [code, setCode] = useState('How can i help you ');

  const [review, setReview] = useState("Your answer will be displayed here. ");

  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = useState(false);

async function reviewCode() {
  setLoading(true);
  try {
    const response = await axios.post('http://localhost:3000/ai/ask', { code });
    setReview(response.data.response || response.data);

  } catch (error) {
    console.error(error);
  }
  setLoading(false);
}

function clear(){
  setCode("");
}

  useEffect (()=>{ 
    Prism.highlightAll()
  },[]);


  return (
    <>
    <div className='container'>
      <Sidebar/>
    <div className='left'>
        <div className="code">
          <Editor
          value={code}
          onValueChange={setCode}
          highlight={code => Prism.highlight(code, Prism.languages.javascript, "javascript")}
          padding={10}
          style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          background: "#2d2d2d", // matches Prism Tomorrow
          color: "#fff",
           minHeight: "100%" // ensure clickable
  }}
/>
        </div>
        <div className="button-group">
        <button onClick={clear} className="clear">Clear all</button>
        <button onClick={reviewCode} className="review" disabled={loading}>
           {loading ? "Loading..." : "Review"}
        </button>
</div>


    </div>
    <div className='right'>

      {loading ? (
          <div className="spinner"></div>
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        )}

    </div>
    </div>
    </>
  )

}

export default Preview

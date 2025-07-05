// src/components/MarkdownEditor.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    // Update preview when markdown changes
    const timeout = setTimeout(() => {
      setPreview(markdown);
    }, 100); // Slight delay for smoother UX

    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter Markdown text here..."
      />
      <div className="preview">
        {preview === '' ? (
          <div className="loading">Loading preview...</div>
        ) : (
          <ReactMarkdown>{preview}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;

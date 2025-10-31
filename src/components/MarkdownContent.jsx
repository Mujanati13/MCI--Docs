import ReactMarkdown from 'react-markdown';
import './MarkdownContent.css';

// Function to convert heading text to valid ID
const textToId = (text) => {
  // Convert to string and extract only the main part before any parentheses
  const cleanText = String(text)
    .split('(')[0] // Take only text before parentheses
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  
  return cleanText;
};

const MarkdownContent = ({ content, title }) => {
  return (
    <div className="markdown-container">
      <div className="markdown-header">
        <h1>{title}</h1>
        <div className="header-divider"></div>
      </div>
      <div className="markdown-content">
        <ReactMarkdown
          components={{
            h1: ({ node, children, ...props }) => {
              const id = textToId(String(children));
              return <h1 id={id} className="md-h1" {...props}>{children}</h1>;
            },
            h2: ({ node, children, ...props }) => {
              const id = textToId(String(children));
              return <h2 id={id} className="md-h2" {...props}>{children}</h2>;
            },
            h3: ({ node, children, ...props }) => {
              const id = textToId(String(children));
              return <h3 id={id} className="md-h3" {...props}>{children}</h3>;
            },
            h4: ({ node, children, ...props }) => {
              const id = textToId(String(children));
              return <h4 id={id} className="md-h4" {...props}>{children}</h4>;
            },
            p: ({ node, ...props }) => <p className="md-p" {...props} />,
            ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
            ol: ({ node, ...props }) => <ol className="md-ol" {...props} />,
            li: ({ node, ...props }) => <li className="md-li" {...props} />,
            code: ({ node, inline, ...props }) => 
              inline ? <code className="md-code-inline" {...props} /> : <code className="md-code-block" {...props} />,
            blockquote: ({ node, ...props }) => <blockquote className="md-blockquote" {...props} />,
            a: ({ node, ...props }) => <a className="md-link" {...props} />,
            strong: ({ node, ...props }) => <strong className="md-strong" {...props} />,
            img: ({ node, ...props }) => <img className="md-img" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownContent;

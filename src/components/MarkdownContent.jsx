import ReactMarkdown from 'react-markdown';
import './MarkdownContent.css';

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
            h1: ({ node, ...props }) => <h1 className="md-h1" {...props} />,
            h2: ({ node, ...props }) => <h2 className="md-h2" {...props} />,
            h3: ({ node, ...props }) => <h3 className="md-h3" {...props} />,
            h4: ({ node, ...props }) => <h4 className="md-h4" {...props} />,
            p: ({ node, ...props }) => <p className="md-p" {...props} />,
            ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
            ol: ({ node, ...props }) => <ol className="md-ol" {...props} />,
            li: ({ node, ...props }) => <li className="md-li" {...props} />,
            code: ({ node, inline, ...props }) => 
              inline ? <code className="md-code-inline" {...props} /> : <code className="md-code-block" {...props} />,
            blockquote: ({ node, ...props }) => <blockquote className="md-blockquote" {...props} />,
            a: ({ node, ...props }) => <a className="md-link" {...props} />,
            strong: ({ node, ...props }) => <strong className="md-strong" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownContent;

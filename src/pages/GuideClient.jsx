import { useState, useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const GuideClient = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/quid-client.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return <MarkdownContent content={content} title="Guide Client" />;
};

export default GuideClient;

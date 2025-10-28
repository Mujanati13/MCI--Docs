import { useState, useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const GuideAdmin = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/guid.admin.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return <MarkdownContent content={content} title="Guide Administrateur" />;
};

export default GuideAdmin;

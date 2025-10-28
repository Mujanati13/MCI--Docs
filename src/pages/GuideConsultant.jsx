import { useState, useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const GuideConsultant = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/quid-collab.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return <MarkdownContent content={content} title="Guide Consultant / Responsable" />;
};

export default GuideConsultant;

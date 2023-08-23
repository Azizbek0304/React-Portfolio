import React, { useState, useEffect } from 'react';

const ProjectGallery = ({ websiteUrls }) => {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    async function fetchPreviews() {
      const previewData = await Promise.all(
        websiteUrls.map(async (url) => {
          const response = await fetch(
            `https://iframe.ly/api/iframely?url=${encodeURIComponent(url)}`
          );
          const data = await response.json();
          console.log(data);
          return data;
        })
      );

      setPreviews(previewData);
    }

    fetchPreviews();
  }, [websiteUrls]);

  return (
    <div className="project-gallery">
      {previews.map((preview, index) => (
        <div key={index} className="project-item">
          <h1>hi</h1>
          <div dangerouslySetInnerHTML={{ __html: preview.html }} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;

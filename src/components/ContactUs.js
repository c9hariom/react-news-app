import React from 'react';

const ContactUs = () => {
  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Contact Us</h1>
      <p>If you have any questions, suggestions, or feedback about c9News, please feel free to reach out to us:</p>
      <ul>
        <li>Email: c9hariom@gmail.com</li>
        <li>Phone: +xxxx</li>
        <li>Address: Pratapgarh, Uttat-Pradesh, India</li>
      </ul>
      <h3 className="mt-4">Contribute to c9News</h3>
      <p>We welcome contributions to c9News! Whether it's fixing bugs, adding new features, or improving documentation, contributions from the community are highly appreciated.</p>
      <p>To contribute, please follow these steps:</p>
      <ol>
        <li>Fork the <a href="https://github.com/c9hariom/react-news-app" target="_blank" rel="noopener noreferrer">c9hariom/react-news-app</a> repository on GitHub.</li>
        <li>Clone your forked repository to your local machine.</li>
        <li>Create a new branch for your changes: <code>git checkout -b feature/your-feature-name</code></li>
        <li>Make your changes and commit them: <code>git commit -m "Add your commit message here"</code></li>
        <li>Push your changes to your forked repository: <code>git push origin feature/your-feature-name</code></li>
        <li>Create a pull request (PR) to the original repository.</li>
      </ol>
      <p>Once your PR is reviewed and merged, your contribution will be part of c9News!</p>
      <h3 className="mt-4">Connect with Us</h3>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="https://github.com/c9hariom" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/c9hariom/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.instagram.com/c9hariom/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;

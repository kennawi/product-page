import React from "react";
import "./_breadcrumb.scss";

const Breadcrumb = ({ breadcrumbItems }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <li className="breadcrumb__item" key={index}>
            <a href="/">{item}</a>
            {index !== breadcrumbItems.length - 1 && (
              <span className="breadcrumb__slash">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

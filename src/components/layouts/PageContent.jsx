import PropTypes from "prop-types";

function PageContent({ title, children }) {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="p-2 text-center text-secondary">{title}</h2>
          <div className="p-4 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageContent;

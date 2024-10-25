import PropTypes from "prop-types";
import Header from "./Header";

function PageContent({ title, children }) {
  return (
    <>
      <div className="min-h-full">
        <Header title={title} />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageContent;

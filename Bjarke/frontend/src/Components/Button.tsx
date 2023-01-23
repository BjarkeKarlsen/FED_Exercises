import PropTypes from "prop-types";

const TextButton = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <button
      className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded m-4 text-sm"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TextButton;

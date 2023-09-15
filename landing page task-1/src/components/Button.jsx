const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full border-2 ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red  text-white"
      }`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;

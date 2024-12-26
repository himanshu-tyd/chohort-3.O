const Button = ({ disabled, type, lable, icon, containerClass }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`font-clash w-auto flex px-6 py-3 sm:px-8 sm:py-4 items-center gap-3 duration-300 ease-in-out ${containerClass} `}
    >
      <p>{lable}</p>
      {icon}
    </button>
  );
};

export default Button;

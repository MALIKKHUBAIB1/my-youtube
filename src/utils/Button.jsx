function Button({ background, label }) {
  return (
    <button
      type="button"
      className={`p-1 min-w-20 text-black rounded-lg h-8 text-center ${background} m-2`}
    >
      {label}
    </button>
  );
}

export default Button;

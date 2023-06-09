function Button({ children }) {
  return (
        <button className="text-white text-xs lg:text-base m-auto border-solid border border-primary p-2 hover:bg-primary/50 justify-start">
          {children}
        </button>
  );
}

export default Button;

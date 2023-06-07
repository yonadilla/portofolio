function Button({ children }) {
  return (
    <div>
        <button className="text-white text-base m-auto border-solid border border-primary p-2 hover:bg-primary/50 justify-start">
          {children}
        </button>

    </div>
  );
}

export default Button;

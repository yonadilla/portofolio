function ButtonGithub({ children }) {
  return (
    <div>
      <button className="text-white text-base m-auto border-solid border border-abu p-2 hover:bg-abu/50 justify-start">
        {children}
      </button>
    </div>
  );
}

export default ButtonGithub;

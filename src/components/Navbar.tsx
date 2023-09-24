const Navbar = () => {
  const title = "Zydane Blog";
  return (
    <nav className="navbar flex justify-between items-center p-5 mx-auto border-b-2 my-0 max-w-xl ">
      <h1 className="text-blue-800 font-bold text-2xl">{title}</h1>
      <div className="links space-x-5 ">
        <a className="navbar-menu " href="/">
          Home
        </a>
        <a className="navbar-menu " href="/create">
          Create Post
        </a>
      </div>
    </nav>
  );
};
export default Navbar;

const Navbar = () => {
  const title = "Zydane Blog";
  return (
    <nav className="navbar mx-auto my-0 flex max-w-xl items-center justify-between border-b-2 p-5 ">
      <h1 className="text-2xl font-bold text-blue-800">{title}</h1>
      <div className="links space-x-5 ">
        <a className="navbar-menu " href="/">
          Home
        </a>
        <a className="navbar-menu " href="/create">
          Create Post
        </a>
        <a className="navbar-menu " href="/training">
          training
        </a>
      </div>
    </nav>
  );
};
export default Navbar;

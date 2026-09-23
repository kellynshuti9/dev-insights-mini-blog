import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1 className="logo">Dev Insights</h1>
      <nav>
        <a href="#new-post" className="nav-link">New Post</a>
      </nav>
    </header>
  );
};

export default Header;
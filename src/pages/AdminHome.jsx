// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useMenu } from "../state/MenuProvider";
import MenuItems from "../components/MenuItems";

export default function AdminHome() {
  // Global state
  const { bbqMenu } = useMenu();

  // Components
  const MenuItem = bbqMenu.map((item) => (
    <MenuItems key={item.id} item={item} to={`edit/${item.id}`} />
  ));

  return (
    <div className="menu-frm">
      <h1>Home page</h1>
      <Link className="btn btn-view" to="edit/new-menu">
        Add Menu
      </Link>
      {MenuItem}
      <br/>
    </div>
  );
}

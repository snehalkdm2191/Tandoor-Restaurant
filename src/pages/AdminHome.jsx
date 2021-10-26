// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useMenu } from "../state/MenuProvider";
import MenuItems from "../components/MenuItems";

export default function AdminHome() {
  // Global state
  const { bbqMenu } = useMenu();

  // Components
  // This one should be MenuItems (plural) because is an array.
  const MenuItem = bbqMenu.map((item) => (
    // This one should be MenuItem (singular) becuase is an single item
    <MenuItems key={item.id} item={item} to={`edit/${item.id}`} />
  ));

  return (
    // Naming: What does frm mean? Form?, Full right margin? -1
    <div className="menu-frm">
      <h1>Home page</h1>
      <Link className="btn btn-view" to="edit/new-menu">
        Add Menu
      </Link>
      {MenuItem}
      {/* Why there is a br at the end, add a padding top inside "menu-frm" */}
      <br />
    </div>
  );
}

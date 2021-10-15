// NPM packages
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import MenuList from "../components/MenuList";

// Project files
import { useMenu } from "../state/MenuProvider";
import { createDocument, updateDocument, deleteDocument } from "../scripts/fireStore";

export default function Edit() {
  // Global state
  const { id } = useParams();
  const { bbqMenu, dispatch } = useMenu();
  const history = useHistory();

  // Local state
  const [Menu, setMenu] = useState(findMenu(bbqMenu, id));

  // Methods
  function findMenu(bbqMenu, id) {
    const existingMenu = bbqMenu.find((item) => item.id === id);
    const newMenu = { type: "", name: "", description: "", imgUrl: "", price: "" };

    return existingMenu === undefined ? newMenu : existingMenu;
  }

  function onSave(Menu) {
    id === "new-menu" ? onCreateMenu(Menu) : onUpdateMenu(Menu);
    history.push("/admin");
  }

  function onDelete(Menu) {
    id === "new-menu" ? alert("Please add menu..") : onDeleteMenu(Menu);
    history.push("/admin");
    window.location.reload();
  }

  function onChange(key, value) {
    const field = { [key]: value };

    setMenu({ ...Menu, ...field });
  }

  async function onCreateMenu(Menu) {
    Menu.id = await createDocument("bbqMenu", Menu);
    dispatch({ type: "Create_Menu", payload: Menu });
  }

  async function onUpdateMenu(Menu) {
    await updateDocument("bbqMenu", Menu);
    dispatch({ type: "Update_Menu", payload: Menu });
  }

  async function onDeleteMenu(Menu) {
    await deleteDocument("bbqMenu", Menu);
    dispatch({ type: "Delete_Menu", payload: Menu });
  }

  return (
    <div className="menu-frm">
      <h1>Edit page</h1>
      <span className="edit-note"> Note : Please add all the details.</span>
      <MenuList Menu={Menu} onChange={onChange} />
      <br/>
      <Link className="btn btn-frm" to="/admin"><i class="fas fa-arrow-circle-left"></i> Go back</Link>
      <button className="btn btn-frm" onClick={() => onSave(Menu)}><i class="fas fa-save"> </i> Save Menu</button>  
      <button className="btn btn-frm" onClick={() => onDelete(Menu)}><i class="fas fa-trash-alt"></i> Delete Menu</button>
      <br/><br/>
    </div>
  );
}

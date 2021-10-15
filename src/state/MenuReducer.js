export default function MenuReducer(state, action) {
  switch (action.type) {
    case "Create_Menu":
      return createMenu(state, action);
    case "Update_Menu":
      return updateMenu(state, action);
    case "Delete_Menu":
      return deleteMenu(state, action);
    case "Set_Menu":
      return setMenu(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function createMenu(state, action) {
  const { payload } = action;

  return [...state, payload];
}

function updateMenu(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);

  newState[index] = { ...payload };
  return newState;
}

function deleteMenu(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);

  newState[index] = { ...payload };
  return newState;
}

function setMenu(action) {
  const { payload } = action;

  return payload;
}

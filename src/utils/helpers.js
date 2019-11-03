export const actionsDispatchMap = dispatch => (actions, [key, cb]) => {
  Object.assign(actions, { [key]: cb(dispatch) });
  return actions;
};

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case "HEJ":
      return [...state];
    default:
      return initialState;
  }
}

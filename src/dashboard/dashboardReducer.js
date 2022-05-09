const INITIAL_STATE = { summary: { credit: 100, debt: 0 } };

export default function (state = INITIAL_STATE, action) {
  console.log("Aqui é o state",state);
  return state;
}

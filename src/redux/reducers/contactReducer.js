let initialState = [
  {
    id: 0,
    name: "Kshitij Kumar",
    email: "xyz@gmail.com",
    number: 1234567890,
  },
  {
    id: 1,
    name: "Test Name",
    email: "test@gmail.com",
    number: 2111223344,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;

    case "DELETE_CONTACT":
      const contactList = state.filter(
        (contact) => contact.id !== action.payload
      );

      state = contactList;
      return state;

    default:
      return state;
  }
};

export default contactReducer;


const greetingReducer = (state = {
    "message": "",
    "inputLibrary": {
        "height":200,// height of each Item
        "verticalSpacing":5, // The space of Items Vertically
        "horizontalSpacing":5, // The space of Items Horizontally
        "itemsPerRow":2, // Number of Items in each row of the page
        "itemsNumber":4 // Number of Items in each page
    }
}, action) => {
  switch(action.type){
      case 'SAY_HELLO':
      return {
          ...state,
          "message": action.message
      };
      case 'RENDER_VIEW':
      return {
        ...state,
        "inputLibrary": action.inputLibrary
      };
      default:
        return state;
  }
};

export default greetingReducer;

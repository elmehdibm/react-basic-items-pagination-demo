export const sayHello = (
    message
) => ({
    "type": "SAY_HELLO",
    message
});

export const renderInputs = (
    inputLibrary
) => ({
    "type": "RENDER_VIEW",
    inputLibrary
});

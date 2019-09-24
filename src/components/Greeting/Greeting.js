import React from 'react';
import "./styles.scss";
import InputSection from '../InputSection/InputSection';
import ShowSection from '../ShowSection/ShowSection';

const Greeting = (
    {message, inputLibrary, renderView}
) => (
    <div
        className="greeting_container"
    >
        <InputSection renderView={renderView} inputLibrary={inputLibrary} />
        <div className="separator" />
        <ShowSection inputLibrary={inputLibrary} />
    </div>
);

export default Greeting;

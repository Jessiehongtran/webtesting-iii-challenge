import React from 'react';
import renderer from "react-test-renderer";
import Dashboard from "./Dashboard"

describe("<Dashboard/>", ()=> {
    //Test Dashboard shows the controls and display
    it("shows the controls and display", ()=> {
        const tree = renderer.create(<Dashboard />)
        console.log('tree', tree)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
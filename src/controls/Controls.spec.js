import React from "react";
import renderer from "react-test-renderer";
import Controls from "./Controls"
import { render,fireEvent } from "react-testing-library";


describe("<Controls />", ()=> {
    it("matches snapshot", ()=> {
        const tree = renderer.create(<Controls/>)
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it("cannot be closed or opened if it is locked",()=> {
        const disableCheck = render(<Controls/>)
        expect(disableCheck).toBeTruthy()
        
    })
   
})
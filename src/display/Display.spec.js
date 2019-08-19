import React from "react";
import renderer from "react-test-renderer";
import Display from "./Display"
import { render} from "react-testing-library";


describe("<Display />", ()=> {
    it("matches snapshot", ()=> {
        const tree = renderer.create(<Display/>)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it("defaults to 'unlocked' and 'open'", ()=> {
        const defaultCheck = render(<Display />)
        console.log('defaultCheck', defaultCheck)
        defaultCheck.getByText(/unlocked/i)
        defaultCheck.getByText(/open/i)
        
    })
})
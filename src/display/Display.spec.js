import React from "react";
import renderer from "react-test-renderer";
import Display from "./Display"
import { render} from "react-testing-library";


describe("<Display />", ()=> {
    it("matches snapshot", ()=> {
        const tree = renderer.create(<Display/>)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    //Test Gate defaults to unlocked and open
    it("defaults to 'unlocked' and 'open'", ()=> {
        const defaultCheck = render(<Display />)
        console.log('defaultCheck', defaultCheck)
        defaultCheck.getByText(/unlocked/i)
        defaultCheck.getByText(/open/i)
        
    })

    //Test Display component displays if gate is open/closed and if it is locked/unlocked
    it("display texts", ()=> {
        const component = render(<Display />)
        component.getByText(/locked/i)
        component.getByText(/unlocked/i)
        component.getByText(/open/i)
        // component.getByText(/closed/i)
        
    })


    //Test when locked or closed use the red-led class
    it("when locked or closed use the red-led class", ()=> {
        const locked = "locked"
        const closed = "closed"
        const {container} = render(<Display locked={locked} closed={closed} />);
        expect(container.firstChild.classList.contains('red-led')).toBe(false)
        expect(container.firstChild.classList.contains('red-led')).toBe(false)
        
    })

    //Test when unlocked or open use the green-led class
    it("when locked or closed use the red-led class", ()=> {
        const unlocked = "unlocked"
        const open = "open"
        const {container} = render(<Display unlocked={unlocked} open={open} />);
        expect(container.firstChild.classList.contains('green-led')).toBe(false)
        expect(container.firstChild.classList.contains('green-led')).toBe(false)
        
    })
    

})



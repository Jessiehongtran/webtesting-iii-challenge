import React from "react";
import renderer from "react-test-renderer";
import Controls from "./Controls"
import { render,fireEvent } from "react-testing-library";


describe("<Controls />", ()=> {
    it("matches snapshot", ()=> {
        const tree = renderer.create(<Controls/>)
        expect(tree.toJSON()).toMatchSnapshot();
    })

    //Test Gate cannot be closed or opened if it is locked
    //Test the closed toggle button is disabled if the gate is locked
    //Test the locked toggle button is disabled if the gate is open
    it("cannot be closed or opened if it is locked",()=> {
        const disableCheck = render(<Controls/>)
        expect(disableCheck).toBeTruthy()
        
    })

    it("buttons' text changes to reflect the state the door will be in if clicked", ()=> {
        const updateText = jest.fn();
        console.log('updatedText', updateText)
        let messageMock = "";
        const {getByText} = render(<Controls updateText={updateText} messageMock={messageMock}/>)
        fireEvent.click(getByText(/unlocked/i));
        expect(updateText).toBe(/locked/i);


        const {getByText, findByText} = render(<Controls/>)
        console.log(getByText);
        act(() => {
            fireEvent.click(getByText(/closed/i));
          });
          findByText(/open/i);
    })
   
})


// test('renders "success" text', () => {
//     const { getByText, findByText } = render(<App />);
//     console.log(getByText);
//     // Click button
//     act(() => {
//       fireEvent.click(getByText("Get message!"));
//     });
//     // Wait for page to update with query text
//     findByText(/success/i);
//   });
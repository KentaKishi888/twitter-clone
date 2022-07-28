import {render, screen} from '@testing-library/react';
import Widgets from "../components/widget/Widgets"

describe("Test01 Widgets Component", () => {
    test("render from " , async () => {
        render(<Widgets/>);
        screen.debug();
    });
 

});

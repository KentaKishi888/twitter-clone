import {render, screen} from '@testing-library/react';
import Timeline from "../components/timeline/Post"

describe("Test01 Widgets Component", () => {
    test("render from " , async () => {
        render(<Timeline/>);
        screen.debug();
    });
 

});

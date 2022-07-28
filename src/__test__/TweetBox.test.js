import {render, screen} from '@testing-library/react';
import TweetBox from "../components/timeline/Post"

describe("Test01 Widgets Component", () => {
    test("render from " , async () => {
        render(<TweetBox/>);
        screen.debug();
    });
 

});

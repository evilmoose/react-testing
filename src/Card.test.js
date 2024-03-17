import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";

it("works when right arrow is clicked", function() {
    const {container} = render(
        <Card 
            caption="test" 
            src="" 
            currNum="" 
            totalNum=""
        />
    );
})
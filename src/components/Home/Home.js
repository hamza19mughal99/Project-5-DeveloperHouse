import React from 'react';
import growth from "../../images/growth.png";
import Common from "../Common/Common";

function Home() {
    return (
        <div>
            <Common name="Grow your business with "
                boldcom="DeveloperHouse Team"
                but="get started"
                visit="/Services"
                img={growth}
            />
        </div>
    );
}

export default Home;
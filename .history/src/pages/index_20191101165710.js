import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";

export default () => {
    return(
        <PrimaryLayout>
            <Post
            title="sdsdsd" except="'/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </PrimaryLayout>
    );
}

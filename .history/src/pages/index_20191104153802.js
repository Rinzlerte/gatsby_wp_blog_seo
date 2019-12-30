import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";
import {graphql } from 'gat'


export default () => {
    return(
        <PrimaryLayout column="col-xs-6">
            <Post
            title="sdsdsd" 
            except="sdsdsddf ff  sfd fsf  ffdsd"
            />
            
        </PrimaryLayout>
    );
}

import React from "react";
import {graphql} from 'gatsby';
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";

export default ({data}) => {
  console.log(data);
    return(
        <PrimaryLayout column="col-xs-6">
        {}
            <Post
            title="sdsdsd" 
            except="sdsdsddf ff  sfd fsf  ffdsd"
            />
            
        </PrimaryLayout>
    );
}

export const query = graphql`
{
    allMarkdownRemark{
      nodes{
        frontmatter{
          title
          date
          keyword
          image
        }
        excerpt
        html
      }
    }
  }
`

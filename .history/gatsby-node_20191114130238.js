const {createFilePath} = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node , getNode, actions }) => {
    const {onCreateNodeField} = require actions} 
if (node.internal.type === "MarkdownRemark"){
        console.log(createFilePath({node, getNode, basePath: "posts"}))
    }
}
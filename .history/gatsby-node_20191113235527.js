const {createFilePath} = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node , getNode, basePath }) => {
if (node.internal.type === "MarkdownRemark"){
        console.log(createFilePath({
            node, 
        }))
    }
}
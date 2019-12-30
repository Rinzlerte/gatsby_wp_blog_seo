const {createFilePath} = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node }) => {
if (node.internal.type === "MarkdownRemark"){
        console.log(createFilePath)
    }
}
const {createFilePath} = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node , getnode }) => {
if (node.internal.type === "MarkdownRemark"){
        console.log(createFilePath({
            node, 
        }))
    }
}
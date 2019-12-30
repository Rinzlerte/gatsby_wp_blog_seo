const {createFilePath} = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node , getNode, baseParh }) => {
if (node.internal.type === "MarkdownRemark"){
        console.log(createFilePath({
            node, 
        }))
    }
}
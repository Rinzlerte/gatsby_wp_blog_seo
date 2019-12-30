const {createFilePath} = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node , get }) => {
if (node.internal.type === "MarkdownRemark"){
        console.log(createFilePath({
            node, 
        }))
    }
}
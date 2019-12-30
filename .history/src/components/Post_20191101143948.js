import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Post = (props) => {
    return (
        <div className="p-3">
            <Card >
                <Card.Img variant="top" src="gatsby-cheers.jpg" />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
               {pro}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Post;
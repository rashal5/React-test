import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';



const Book = () => {
    const students = [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            description: 'A novel set in the 1920s that tells the story of Jay Gatsby and his unrequited love for Daisy Buchanan.',
            image: 'https://via.placeholder.com/150',
            infoLink: 'https://en.wikipedia.org/wiki/The_Great_Gatsby'
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            description: 'A novel about the serious issues of rape and racial inequality narrated by young Scout Finch.',
            image: 'https://via.placeholder.com/150',
            infoLink: 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird'
        },
        {
            title: '1984',
            author: 'George Orwell',
            description: 'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
            image: 'https://via.placeholder.com/150',
            infoLink: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four'
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            description: 'A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet.',
            image: 'https://via.placeholder.com/150',
            infoLink: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice'
        }
    ];
    return (
        <Container>
            <Row>
                {students.map((x) => (
                    <Col sm={1} md={6} lg={9} xl={3} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={x.image} alt={x.title} />
                            <Card.Body>
                                <Card.Title>{x.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{x.author}</Card.Subtitle>
                                <Card.Text>{x.description}</Card.Text>
                                <Card.Link href={x.infoLink} target="_blank">More Info</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Book;

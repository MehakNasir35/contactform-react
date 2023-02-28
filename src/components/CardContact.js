import {
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col
} from 'reactstrap';

export function CardContact(props) {
    return (
        <>
            <Card className="my-2 bg-light">
                <CardBody>
                    <Row>
                        <Col xs='10'>
                            <CardTitle tag="h5">
                                {props.name}
                            </CardTitle>
                            <CardText>
                                {props.email} <br />
                                {props.number}
                            </CardText>
                            <Button color='secondary'>Edit</Button>
                            <Button color='danger'>Delete</Button>
                        </Col>
                        <Col >
                            <Button color={props.btnClass}>
                                {props.type}
                            </Button>
                            <CardImg
                                alt="Card image cap"
                                bottom
                                src={props.imageSource}

                                width="100%"
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}
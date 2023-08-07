import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";
import { addToCart } from "../slices/cartSlice";

import "../styles/productScreen.css"; // Import your custom CSS file

function ProductScreen() {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  // Ensure the product object is defined before accessing its properties
  const { data: product } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <div className="product-details-ctnr">
      <div className="product-screen-container">
        {" "}
        {/* Add a custom class for the container */}
        <Link className="back-btn" to="/shop">
          Go Back
        </Link>
        {product ? (
          <>
            <h1>Latest Products</h1>
            <Row className="product-details-container">
              <Col md={6} xs={12} className="product-image-col">
                <Image
                  src={product.image}
                  alt={product.name}
                  fluid
                  className="product-image"
                />
              </Col>

              <Col md={3} xs={12} className="product-description-col">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col md={3} xs={12} className="add-to-cart-col">
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out Of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    {/* Qty Select */}
                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(Number(e.target.value))}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}

                    <ListGroupItem>
                      <Button
                        className="blue"
                        type="button"
                        disabled={product.countInStock === 0}
                        onClick={addToCartHandler}
                      >
                        Add To Cart
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          // You can show a loading state or an error message while the data is being fetched
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default ProductScreen;

import React from "react";

const Cart = (props) => {
  console.log(props.cart);
  const cart = props.cart;
  let cartCourses = [];
  if (props.cart !== undefined && props.cart.length > 0) {
    cartCourses = props.cart.map((course) => (
      <div key={course.id}>Course Name: {course.name}</div>
    ));
  }
  // console.log(cartProducts);
  let totalPrice = 0;
  totalPrice = cart.reduce((sum, course) => sum + course.price, 0);
  console.log(totalPrice);
  return (
    <div>
      <div>
        <h2>Cart</h2>
        <h4>Purchased courses: {cart.length}</h4>
        <h5>{cartCourses}</h5>
        <h4 className="mt-5">Total Price:{totalPrice}</h4>
      </div>
    </div>
  );
};

export default Cart;

## Shopping-app

This is a react shopping app with an items view, and a cart view.<br>

It features:

- nav bar built with buttons but CSS was used to remove all button ui and have them look as links instead
- items quantity and totals kept in the app's state, and total is updated both in nav bar and in cart page total.
- re-use of the item component in both views, and adding different types of buttons using the [children feature](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx).
- quantities can be updated in the cart with +/- buttons and totals are updated instantly in the rest of the app.
- a [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function is used to summarize cart, converting a the list of all the items into a list containing count per item.

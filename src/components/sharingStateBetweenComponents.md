# My notes about sharing state between components

## This is important to understand.

## Keep revisiting this, along with the Jonas example.

We want to share state between the components when the favourite button is clicked...

And so, when a favourite is clicked (set to true) the others need to be set to false.

Solving this explains how we share state between components:

The components have no idea about their respective states - they are independent of each other.

So we have to pull up the state into the parent component because it is the only component that knows about both components. This is the App component.

Remembering data is pushed down in React via props.

So we go into the joke component and remove the favorite state. We put this into the parent component.

const [favorite, setFavorite] = useState(1);

So app.jsx now knows about the favorite and setFavorite state.

We can change the state value of the state.

And in this example we are changing it from being a bolean to the ID - because we need it to decide which joke component has been favorited.

And in this example we default to the 1st joke.

We can then use this state to pass down (as a prop) a bolean value to set the state in the component.

In other words, where the state favorite value is equal to the joke-id, it must be favorite - so we can pass down the default favorite to identify which is the favorite (from the start.) = This is implemented by adding a prop to the Joke component as a bolean value

favorite === joke.id

So because the default is set to 1, 1 will be passed as favorite into the joke component, and so the bolean value will be set.

Then back in the joke component, we need to receive this new prop

destructure and add a favourite prop into the function that creates the Joke component. The Joke function accepts favorite as a prop.

So when we click on the favorite button, the joke component cannot handle state anymore because the state is now managed in the app component.

We now have to change the onclickevent on the favorite button. The event to change the favorite is actually in the app component, so we need to pass this down via a prop, so that the joke component can access the handleclick event.

So previously we were setting the favorite inside the component but we cannot do that now the state is sitting within the app component.

So we have to accept a new prop in the joke component to handle the setting of the favorite - lets set that to onFavorite.

So the handleFavorite function will call this onFavorite and pass in the ID. Remember the state we are storing is the ID.

So we then have to go back to the app component to pass down the onFavorite as a prop in the joke component.

This onFavorite has to equal a function which calls the setFavorite function.

So we create a new function in app function called handleFavour that takes the ID and inside that function sets the favorite to the ID.

And so in summary the way to share state between components is to move the state up into the parent component and then pass down that state using props.

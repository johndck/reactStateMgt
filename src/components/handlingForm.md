# Handing a form in react to capture a new joke

We want to creat a form component that will allow a user to input a new joke and then we will add the new joke to the array.

There are 2 steps here.

Step 1

Get the form component created and the capture of the new joke.

Step 2

Add the joke to the array - this is a whole separate piece to study.

We will deal with step 1 in here.

When we create the form we must automatically add the onSubmit event to the form.

Remember the array of jokes is held in the app component, so we need the new form component to pass the new joke upto the app component.

So we will need a new function in the app component to handle the newJoke and then we will pass that function down into the form component as a prop.

So we will create a new prop onto the Jokeform called onNewJoke = {handlenewjoke} ... when we pass that function down, its a callback function that the JokeForm will call.

So we then have to go to JokeFrom and pass in the prop - {onNewJoke} -- which is the destructuring of the onNewJoke prop we just added....

So we then go back to the handleSubmit form in the jokeform and call the onNewJoke function when the form is submitted. We pass in the new joke text.

So the next thing we need to do is keep track of what the user types into the text box.

We use state to track the value entered into the text box.

So we create a new state variable for the new text and a function to update the new text. And this goes into the JokeForm component.

And then every time something is written into the input box we call an onChange event that calls the setText to equal the event.target.value.

Remember we will pass in an event object to the function.

Then once the new joke submitted we then pass the new joke text into the onNewJoke function - which was passed in as a prop from the parent component.

So it is passing the data upto the parent component.

We can also set the value property on the input field to equal the jokeText and in the submit function at the end we can update the value to "" at the end of the function - so this resets the form.

Any form will manage state in this way.

So the next step is update the joke array.

This is step 2 which is another learning topic.

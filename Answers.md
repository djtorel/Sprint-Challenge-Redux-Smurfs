# Answers

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    1. >Object.create, Object.assign, Array.from
    1. >Object.assign allows combining two objects and essentially extending the first one passed in if keys match

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    1. Actions
        > Allow data to be transferred from the application to the store via the action type and optionally a payload.
    1. Reducers
        > Describes how the application's state changes in r esponse to actions sent to the store.
    1. Store
        > State machine that holds the application state, allows access to the state, allows state to be updated via dispatch, registers listeners via subscribe.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    * >Application state holds state that can be used and potentially modified by any part of the application. Component state is state that exists only on that component and can only be shared/modified on the component itself or its children through props.
    * >A good time to use Application state vs component state is when you have some sort of state that determines how multiple children behave or display. It is more scalable for larger apps, and easier to pass data to any children components that need it directly.

4. What is middleware?
    >Middleware is a bridge between two different pieces of software/technology that is usually designed to extend or simplify the interface between the two.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    >Redux-thunk allows asynchronous actions to be used. It allows action creators that return a function instead of an action.

6. Which `react-redux` method links up our `components` with our `redux store`?
    >connect

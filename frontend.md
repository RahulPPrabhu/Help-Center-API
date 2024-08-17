## React Assignment

1. How can you implement shared functionality across a component tree?
    To create a shared functionality we can either use the props or a context API across a component tree. Suppose for example if we need to say trigger a change in the UI in one component but it is not under the same hierarchy then we can send the props from the one component and make sure to use the same in the other component and trigger a UI change. Similarly we can also use the context API to do so.

2. Why is the `useState` hook appropriate for handling state in a complex component?
    useState is one of the most powerful hook for state management since we can set the state and also trigger the change. It is the best go to for local state management, 
    For example instead of writting lengthy logic to achieve, it can be achieved with the help of useState like if we need to show the loading icon, then we just need to use useState with useState initially set to false and when we need to show it we can set it to true to show.

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)

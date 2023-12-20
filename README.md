# Calculate-Tip
React application for calculating tips based on the bill amount and service satisfaction.


React Tip Calculator Application
This React application serves as a tip calculator, allowing users to calculate tips based on their bill amount and service satisfaction. The code is well-structured and consists of several components to enhance modularity and maintainability.
1. App Component:
* The App component acts as the main container, rendering the Head component (a simple header) and the TipCalculator component.
2. TipCalculator Component:
* Manages the state for the bill amount (bill), the first percentage (percentage1), and the second percentage (percentage2).
* Calculates the tip based on the average of the two percentages selected.
* Provides a reset functionality through the handleReset function, which resets the bill and percentages to their initial state.
    * Renders child components:
    * BillInput: Accepts the bill amount input.
    * SelectPercentage: Allows users to select satisfaction percentages for two different scenarios.
    * Output: Displays the calculated total amount including the tip.
    * Reset: Provides a button to reset the input and percentages.
3. BillInput Component:
* Renders a form for users to input the bill amount.
* Utilizes the onSetBill prop function to update the bill amount in the parent component's state.
4. SelectPercentage Component:
* Renders a dropdown to select satisfaction percentages.
* Utilizes the setPercentage prop function to update the respective percentage in the parent component's state.
5. Output Component:
* Displays the total amount to be paid, including the original bill and calculated tip.
6. Reset Component:
* Renders a button to reset the input fields and percentages.
* Invokes the onReset prop function when clicked.
7. Head Component:
* Displays a header for the application.
Additional Notes:
* The code uses React hooks (useState) for managing component-level state.
* Styling is applied through an external CSS file (index.css).
Recommendations:
* Consider adding input validation to ensure that the bill amount is a valid number.
* Enhance styling for a more visually appealing user interface.
* Include accessibility considerations for a better user experience.
This React Tip Calculator application demonstrates effective state management, component composition, and user interaction handling.

[Watch the Tutorial on YouTube](https://youtu.be/O3oKJaRICK0)

<img width="1440" alt="Screenshot 2023-12-09 at 09 03 35" src="https://github.com/HesamFarjad/Calculate-Tip/assets/81914229/60511836-ffb6-497d-a433-2aa841ec41b1">
<img width="1440" alt="Screenshot 2023-12-09 at 09 03 09" src="https://github.com/HesamFarjad/Calculate-Tip/assets/81914229/5a9148b0-5787-4c8b-99b7-0f3e966925cf">
<img width="1440" alt="Screenshot 2023-12-09 at 09 02 51" src="https://github.com/HesamFarjad/Calculate-Tip/assets/81914229/65fa6e76-466d-4da0-9e8d-efcfc9d9f064">

Happy calculating!

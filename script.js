// Global variable for scope demonstration (Part 2)
let globalDiscountRate = 0.15; // 15% discount globally

// Selectors for DOM manipulation
const totalOutput = document.getElementById('total-output');
const scopeOutput = document.getElementById('scope-output');
const flipButton = document.getElementById('flip-button');
const interactiveCard = document.getElementById('interactive-card');

// =========================================================
// 📚 Part 2: JavaScript Functions (Scope, Parameters & Return)
// =========================================================

/**
 * Function 1: Calculates a final total after applying a discount.
 * Demonstrates: Parameters and a clear Return value.
 * @param {number} subtotal - The initial cost before discount.
 * @param {number} taxRate - The tax percentage (e.g., 0.08 for 8%).
 * @returns {number} The final cost after discount and tax.
 */
function calculateFinalCost(subtotal, taxRate) {
    // Local variable: only exists within this function
    const discountAmount = subtotal * globalDiscountRate; // Uses globalDiscountRate (Global Scope)
    const discountedTotal = subtotal - discountAmount;
    const finalTotal = discountedTotal * (1 + taxRate);
    
    // Return the calculated value
    return finalTotal;
}

// Example usage of Function 1
const initialPrice = 250;
const localTax = 0.05; // 5% tax
const finalResult = calculateFinalCost(initialPrice, localTax);

// Output result to the DOM
totalOutput.textContent = `$${finalResult.toFixed(2)}`;
console.log(`Part 2: Final Cost Calculation: $${finalResult.toFixed(2)}`);


/**
 * Function 2: Demonstrates Local vs. Global Scope.
 * Attempts to modify the global variable and declares a local one.
 */
function checkScope() {
    // Local variable: shadows the global one, but only exists here.
    let globalDiscountRate = 0.50; 
    console.log(`Inside function, localDiscountRate: ${globalDiscountRate}`);

    // If we wanted to modify the global one, we wouldn't use 'let' here.
}

checkScope();
// The global variable remains unchanged because 'let' was used locally inside checkScope()
scopeOutput.textContent = `Global Discount Rate (still 15%): ${globalDiscountRate * 100}%`;
console.log(`Part 2: Outside function, globalDiscountRate: ${globalDiscountRate}`);

// ---------------------------------------------------------

// =========================================================
// 🎨🎬 Part 3: Combining CSS Animations with JavaScript
// =========================================================

/**
 * Function 3: Toggles the CSS 'flipped' class on the interactive card.
 * Demonstrates: Function Reusability and using JS to trigger CSS.
 */
function toggleCardFlip() {
    // Use classList.toggle to add or remove the 'flipped' class
    interactiveCard.classList.toggle('flipped');

    // Update button text based on current state
    if (interactiveCard.classList.contains('flipped')) {
        flipButton.textContent = 'Flip Back';
    } else {
        flipButton.textContent = 'Flip Card';
    }
    
    console.log(`Part 3: Card is now ${interactiveCard.classList.contains('flipped') ? 'Flipped' : 'Front-Facing'}`);
}

// Event Listener: Attach the JS function (toggleCardFlip) to the button's click event.
flipButton.addEventListener('click', toggleCardFlip);

// ---------------------------------------------------------

console.log("\nAssignment successfully loaded. Check the UI and CSS for visual effects!");

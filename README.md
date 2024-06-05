# COA-Taskforce-challenge

## 🧬 Live Site

**_[Live Site](https://coa-taskforce-challenge-test.vercel.app)_**

## ⏯️ Table of Contents

1. [Project Description](#project-description)
2. [Setup Instructions](#setup-instructions)
3. [Usage](#usage)
4. [Coding Challenges](#coding-challenges)
   - [Challenge 1: Subarray with Target Sum](#challenge-subarray-with-target-sum)
   - [Challenge 2: String Transformation](#challenge-string-transformation)

## Project Description

This project contains two main parts:

1. **Design Part**: A web page with a responsive gallery that adjusts to different screen sizes.
2. **Coding Challenges**: Solutions to two algorithmic problems.


## 📍 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mugishaj092/coa_taskforce_challenge.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd coa_taskforce_challenge
   ```
3. **Open the `index.html` file in a web browser to view the design part**.

## Usage

### Observing the Design Aspect

  - Open the `index.html` file in a web browser.
  - Hover over the images to see the overlay text move up.
  - Resize the browser window to see the overlay text disappear when the width is below 1000px.

### 🚀 Running the Coding Challenges

You're free to execute the coding challenges in any JavaScript environment, whether it's in your browser's console or within Node.js.


## 2 coding Challenges

### Challenge 1: Subarray with Target Sum

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

#### Example:

```javascript
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(containsSubarraySum(arr, target));
```

### Challenge 2: String Transformation

Given a string, transform it based on the following rules:

- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

#### Example:

```javascript
console.log(transformString('Hamburger'));
console.log(transformString('Pizza'));
```
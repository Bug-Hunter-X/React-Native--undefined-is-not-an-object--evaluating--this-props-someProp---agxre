# React Native: undefined is not an object (evaluating 'this.props.someProp')

This repository demonstrates a common error in React Native: attempting to access `this.props` or `this.state` before the component has mounted.  Accessing these values before mounting will result in `undefined is not an object (evaluating 'this.props.someProp')` or a similar error.

## Problem

The `bug.js` file shows how accessing `this.props` within the constructor can cause this error.  The component tries to use `this.props.someProp` before the props have been properly assigned during the mounting process.

## Solution

The `bugSolution.js` file presents the solution.  Instead of accessing props in the constructor, the code now accesses them within `componentDidMount`, ensuring the component has fully mounted and the props are defined.

Alternatively, you can set default values for props and state within the constructor to avoid errors.
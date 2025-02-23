# Intermittent 500 Errors in Node.js Server

This repository demonstrates a common error in Node.js servers where asynchronous operations can lead to intermittent 500 errors if not handled properly.  The `bug.js` file contains the faulty code, while `bugSolution.js` provides a corrected version.

## Problem

The server uses an asynchronous `fetchData` function that randomly fails.  If the function fails, the response is not handled correctly, resulting in a 500 error. This makes the server unreliable.

## Solution

The solution utilizes `try...catch` blocks to gracefully handle potential errors during the asynchronous operation.  This ensures a consistent response to the client even when the `fetchData` function fails.
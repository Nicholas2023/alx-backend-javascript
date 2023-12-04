# ES6 Data Manipulation Tasks :smile:

This repository contains a set of JavaScript tasks focusing on ES6 data manipulation. Each task involves working with arrays, objects, sets, maps, and typed arrays, utilizing ES6 features for data manipulation.

## Tasks Overview

### Task 0: Basic list of objects
Create a function `getListStudents` that returns an array of objects representing students, each with attributes: `id` (Number), `firstName` (String), and `location` (String).

### Task 1: More mapping
Implement `getListStudentIds` function that extracts an array of student IDs from the list of student objects created in Task 0 using the `map` function.

### Task 2: Filter
Create `getStudentsByLocation` function that filters and returns an array of student objects located in a specific city.

### Task 3: Reduce
Implement `getStudentIdsSum` that calculates and returns the sum of all student IDs using the `reduce` function.

### Task 4: Combine
Develop `updateStudentGradeByCity` to update student grades based on the city and a provided array of new grades, using `filter` and `map` combined.

### Task 5: Typed Arrays
Create `createInt8TypedArray` that generates a new `ArrayBuffer` with an `Int8` value at a specific position.

### Task 6: Set data structure
Implement `setFromArray` to create a `Set` from an array.

### Task 7: More set data structure
Develop `hasValuesFromArray` that checks if all elements in an array exist within a given set.

### Task 8: Clean set
Create `cleanSet` that returns a string of set values starting with a specific string.

### Task 9: Map data structure
Implement `groceriesList` that generates a map of groceries with items and quantities.

### Task 10: More map data structure
Develop `updateUniqueItems` to update the quantity of specific items in a map.

### Task 11: Weak link data structure (Advanced)
Create a `WeakMap` instance to track the number of times `queryAPI` is called for each endpoint, throwing an error when the query count is >= 5.

## File Structure

- `0-get_list_students.js`: Implementation for Task 0.
- `1-get_list_student_ids.js`: Implementation for Task 1.
- ... (and so on for each task)

## Instructions

1. Clone the repository.
2. Navigate to the directory.
3. Execute the JavaScript files related to each task using `npm run dev filename.js`.

Feel free to explore and modify the code as needed to complete the tasks!

```

This README provides an overview of the tasks, their descriptions, the file structure, and instructions on how to interact with the codebase.

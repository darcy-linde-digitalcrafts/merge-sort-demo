# Merge Sort Demo

Merge Sort is a popular **divide-and-conquer** sorting algorithm that
efficiently sorts an array or a list by **recursively** dividing it into two
halves, sorting each half, and then merging the sorted halves back together.

## How it works

1. **Divide**
   The unsorted array is divided into two halves repeatedly until the subarrays
   become small enough to be considered sorted (i.e., when they contain only one
   element).
2. **Conquer**
   Each small subarray is considered sorted as it only contains one element.
3. **Merge**
   The sorted subarrays are then merged back together into larger sorted
   subarrays until the entire array is sorted.

## Properties

- Divide-and-conquer (recursive)
- **Stable**
- **Guaranteed time complexity**
- **Comparison-based**
- The main drawback of Merge Sort is that it **requires additional space** for
  the temporary arrays used during the merging process.

## Step-by-step

- The key steps of the Merge Sort algorithm are the merging process.
- During the merging, the algorithm compares elements from both subarrays and
  places them in the correct order in a **temporary array**.
- The temporary array is later copied back to the original array, effectively
  merging the two subarrays into a single sorted array.

## Algorithm

```text
MergeSort(arr)
    If the array has one or zero elements, it is already sorted.
    Otherwise,
        1. Divide the array into two halves: left_half and right_half.
        2. Recursively call MergeSort on left_half.
        3. Recursively call MergeSort on right_half.
        4. Merge the sorted left_half and right_half to form a single sorted array.
        5. Copy the merged array back to the original array.

The Merge function is responsible for merging the two sorted subarrays.
Merge(left_half, right_half)
    Create a temporary array to hold the merged elements.
    Initialize pointers for left_half (left_index) and right_half (right_index).
    While there are elements in both left_half and right_half:
        Compare the elements at left_index and right_index.
        Put the smaller element into the temporary array.
        Move the respective pointer (left_index or right_index) one step forward.
    Copy any remaining elements from left_half or right_half to the temporary array.
    Copy the temporary array back to the original array.
```

## Time Complexity

| Scenario | Big O      |
| -------- | ---------- |
| Worst    | O(n log n) |
| Average  | O(n log n) |
| Best     | O(n log n) |

- Merge Sort **guarantees a time complexity of O(n log n)**, which means it
  performs efficiently even for large datasets.

Explanation:

1. Divide: In the divide step, the input array is repeatedly divided into halves
   until the base case is reached, which is when each subarray contains only one
   element. This division takes O(log n) time because each division reduces the
   problem size by half.
2. Sort: The time complexity of sorting each subarray is O(n), as each element
   must be visited once to compare and merge it during the merging step.
3. Merge: The merging step takes O(n) time, as it involves comparing and merging
   all the elements from both halves to create a sorted array.

The critical insight in Merge Sort is that the number of times we divide the
array is log₂(n), and at each level, the merging step takes O(n) time. Since
merging is performed log₂(n) times, the overall time complexity is O(n log n).

## Space Complexity

The space complexity of Merge Sort is O(n), where 'n' is the number of elements
in the input array to be sorted.

In Merge Sort, the sorting process involves creating temporary arrays during the
merging step. These temporary arrays are used to hold the elements while merging
the sorted subarrays back together to form the final sorted array. The size of
the temporary arrays depends on the number of elements being merged at each
level of recursion.

At the lowest level of recursion, when the subarrays contain only one element,
there are 'n' temporary arrays of size 1. As the merging progresses back up the
recursion tree, the size of the temporary arrays doubles at each level.

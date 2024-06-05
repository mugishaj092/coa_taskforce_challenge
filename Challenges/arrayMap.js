function hasContiguousSubarrayEqualToTarget(arr, target) {
    for (let start = 0; start < arr.length; start++) {
        let sum = 0;
        for (let i = start; i < arr.length; i++) {
            sum += arr[i];
            if (sum === target) {
                return true;
            }
            if (sum > target) {
                break;
            }
        }
    }
    return false;
}
// Here it will become true 
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasContiguousSubarrayEqualToTarget(arr, target)); 
// Here it will become false
const arr1 = [4, 2, 7, 1, 9, 5];
const target1 = 150;
console.log(hasContiguousSubarrayEqualToTarget(arr1, target1));

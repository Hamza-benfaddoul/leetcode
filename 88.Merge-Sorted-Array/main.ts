// leet code  create function to merge two sotred arrays

function merge(nums1: number[], nums2: number[], m: number, n: number): void {

  let i: number = m - 1;
  let j: number = n - 1;
  let k: number = m + n - 1;

  while (k >= 0) {
    if (j < 0)
      break;
    if (i >= 0 && nums1[i] > nums2[j])
      nums1[k--] = nums1[i--];
    else
      nums1[k--] = nums2[j--];
  }
  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3);


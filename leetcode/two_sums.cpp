class Solution {
public:
    vector<int> twoSum(vector<int> &nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i+1; j < nums.size(); j++) {
                if (nums[j] == target - nums[i]) {
                    return {i, j};
                }
            }
        }
        // Return an empty vector if no solution is found
        return {};
    }
};
// nums =
// [3,2,4]
// target =
// 6
// Output
// [1,2]
// Expected
// [1,2]
//alternative

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n= nums.size();
       for(int i =0;i< n-1;i++)
       {
        for (int j=i+1;j<n;j++)
        {
           int sum=nums[i]+nums[j];
            if(sum==target)
            {
                return{i,j};
            }
        }
      
       }
       return {};
    }
};
// if array is sorted then 
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n= nums.size();
     int i=0,j=n-1;
     while(i<j)
     {
        int sum =num[i]+nums[j];
        if(sum>target)
        {
            i++;
        }
        else if(sum<target)
        {
            j++;
        }
        else
        {
            return{i,j};
        }
     }
       return {};
    }
};
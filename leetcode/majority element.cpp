//by brutes force approach
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n=nums.size();
        for(int i=0;i<n;i++)
        {
            int num=nums[i];
            int count=0;
            for (int j=0;j<n;j++)
            {
                if(nums[j]==num)
                {
                    count ++;
                }
            }
            if(count>n/2)
            {
                return nums[i];
            }
        }

       return{}  ;
    }
};
//second optimized approa\ch by sorting
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n=nums.size();
        //sorting
        sort(nums.begin(),nums.end());
        //find element
        int count =1;
        int ans=nums[0];

       if(n>1)
       {
        for(int i=1;i<n;i++)
        {
            if(nums[i]==nums[i-1])
            {
                count++;
            }
            else {
                count=1;
                ans=nums[i];
            }
            if (count>n/2)
            {
                return ans;
            }
        }
}
else {
   return ans;
}
       return{}  ;
    }
};
//moores voting algo
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n=nums.size();
       
        int count =0;
        int ans=nums[0];
       if(n>1)
       {
        for(int i=0;i<n;i++)
        {
            if(count==0)
            {
                ans=nums[i];
            }
           if(ans==nums[i])
           {
            count++;
           }
           else {
            count--;
           }
            
        }
        return ans;
}
else {
   return ans;
}
       return{}  ;
    }
};
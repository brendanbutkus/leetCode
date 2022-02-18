var removeDuplicates = function(nums){
    for(let i = 0; i < nums.length; i++){
        if( nums[i] == nums[i+1]){
            nums.splice(i,1);
            
        }
        if( nums[i] == nums[i-1]){
            nums.splice(i,1);
            
        }
    }
    console.log(nums)
    let k = nums.length;
    console.log(k)
    
};

removeDuplicates([1,1,2]);
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
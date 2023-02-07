# Linked Lists  
```javascript
--> while c: c++           
-f> for    : c++         

           
1. zipper-list         
  a. c,c1,c2 = h1,h1>,h2           
  b. c1&c2-->          
       (!%2) c>=c1; c1++           
       (%2)  c>=c2; c2++         
       c++           
  c. (c1&!c2) c>=c1         
     (c2&!c1) c>=c2           
         
2. merge-list           
  a. c = h1|h2 > short         
  b. c,c1,c2 = h,h1>,h2           
  c. c1&c2-->         
      (c1 <= c2) c>=c1; c1++;           
      (c1 > c2)  c>=c2; c2++;         
      c++           
  d. (c1&!c2) c>=c1         
     (c2&!c1) c>=c2           
           
3. add-lists           
  a. res,c,c1,c2,carry = node,res,h1,h2,0         
  b. (c1|c2|carry=1)-->            
      [ val1, val2 ] ? [ val1, val2 ] : 0         
      carry (1|0)           
         
      c>node(sum % 10)           
      c++         
      (c1) c1++; (c2) c2++           
```

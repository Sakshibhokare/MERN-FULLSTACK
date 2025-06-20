/* stack follows LIFO last in first out  */

/* stack functions : push(x), pop(), top(), size() */

/* queue follows FIFO  */
/* functions are same  */

/* step 1: create array and add elements into that move top variable
top=-1, int st[10]; write function for push, top, pop, size */

/* all operations are done in the O(1) tc and space O(10) we require fixed size, arrays are not dynamic  */
#include <bits/stdc++.h>

using namespace std;

class Stack
{
    int arr[10];
    int top = -1;

    void push(int x)
    {
        if (top != 9)
        {
            top = top + 1;
            arr.push_back(x);
        }
    }
    void pop()
    {
        top = top - 1;
    }

    void top()
    {
    }
};

int main()
{

    return 0;
}

#include <iostream>
using namespace std;
int main()
{
    int range, first = 0, second = 1, fibonacci = 0;
    cout << "Enter Range for Terms of Fibonacci Sequence: ";
    cin >> range;
    cout << "Fibonacci Series upto " << range << " Terms " << endl;
    for (int c = 0; c < range; c++)
    {
        if (c <= 1)
            fibonacci = c;
        else
        {
            fibonacci = first + second;
            first = second;
            second = fibonacci;
        }
        cout << fibonacci << " ";
    }
    return 0;
}
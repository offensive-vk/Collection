/**
 * In the first line print two space-separated integers, representing the length of  and  respectively.
In the second line print the string produced by concatenating  and  ().
In the third line print two strings separated by a space,  and .  and  are the same as  and , respectively, except that their first characters are swapped.
*/
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main(void)
{
    string a, b;
    cin >> a;
    cin >> b;

    cout << a.length() << " " << b.length() << endl;
    cout << a + b << endl;

    swap(a[0], b[0]);
    cout << a << " " << b << endl;

    return 0;
}

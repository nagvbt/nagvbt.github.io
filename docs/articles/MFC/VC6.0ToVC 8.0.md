# VC 6.0 to VC 8.0 Conversion Guide
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
## error C2152: '=' : pointers to functions with different attributes db

```cpp
#include<windows.h>
HANDLE h;
void (*f)(int, int);
int _stdcall WinMain( HINSTANCE i, HINSTANCE j, char *k, int l )
{
h = LoadLibrary("z1.dll");
f = GetProcAddress(h,"abc");
}
```

**Solution**

```cpp
#include<windows.h>
HANDLE h;
void (_stdcall *f)(int, int);
int _stdcall WinMain( HINSTANCE i, HINSTANCE j, char *k, int l )
{
h = LoadLibrary("z1.dll");
f = GetProcAddress(h,"abc");
}
```

## error C2228: left of '.length' must have class/struct/union type

```cpp
string GetNewPin(string) {
do {
cout << "Enter new PIN number: ";
cin >> newPin;
} while(int(newPin.length) != 4); //error C2228
return newPin;
}
```

**Solution**

```cpp
while( newPin.length() != 4); // length() is a memberfunction of string
```

## error C2259: 'CException' : cannot instantiate abstract class

```cpp
Catch(CEXception e)
```

**Reason**

As MFC throws Exceptions as pointers to exception as there was no such pointer to exception it is resolved by including pointer to exception

**solution**

```cpp
Catch(CEXception *e)
```

## error C2440

##### Error 1 - 'static_cast' : cannot convert from 'BOOL (\_\_thiscall CSystemSetupDlg::\* )(void)' to 'AFX_PMSG'

**Reason:**
As the ON Message handler expects the return type as Void as the return type was BOOL it was converted to void using pointer to member funtion.
error C2440: 'static_cast' : cannot convert from 'BOOL (\_\_thiscall CUniOLDoc::\* )(void)' to 'AFX_PMSG' ON_COMMAND(ID_RUN_ENDRUN, OnEndRun)

**Solution**

```cpp
typedef void (CUniOLDoc::*ptrHandler)();
ON_COMMAND(ID_RUN_ENDRUN, (ptrHandler)OnEndRun)
```

##### Error 2 - error C2440: 'static_cast' : cannot convert from 'BOOL (**thiscall CUniOLApp::\* )(UINT)' to 'void (**thiscall CCmdTarget::\* )(UINT)'

**Reason:**

```cpp
ON_COMMAND_RANGE(ID_FILE_MRU_FILE1,ID_FILE_MRU_FILE4,OnOpenRecentFile)
ON_COMMAND_RANGE always expect to be return type of void.
```

**Solution**

```cpp
ON_COMMAND_RANGE(ID_FILE_MRU_FILE1,ID_FILE_MRU_FILE4,(void (__thiscall CCmdTarget::* )(UINT))OnOpenRecentFile)
```

## error C2664

##### Error 1 - error C2664: 'DDV_MaxChars' : cannot convert parameter 2 from 'double' to 'const CString &'

**Reason :**
As the Second Parameter in DDV_MAxChars takes strictly of string variables as there was of double type

**Solution:**
The double varaiables are formated to string type.

##### Error 2 - error C2664: 'sprintf' : cannot convert parameter 1 from 'TCHAR [250]' to 'char \*'

```cpp
sprintf(szQuery,"INSERT INTO tSupportUnitInfo(txtSUName,txtProductSetup,txtSystemSetup,txtCOMPort) VALUES('%s','%s','%s','%s')",CString(bstrSU),CString(bstrPS),CString(bstrSS),CString(bstrPort));
```

**Solution:**

```cpp
CString szQuery;szQuery.Format("INSERT INTO tSupportUnitInfo(txtSUName,txtProductSetup,txtSystemSetup,txtCOMPort) VALUES('%s','%s','%s','%s')",CString(bstrSU),CString(bstrPS),CString(bstrSS),CString(bstrPort));

```

##### Note: User Manager does not use MFC .Since ATL and Mfc have shared libraries include `<atlstr.h>`

so that the error "CString :Undeclared identifier" is eliminated.

##### Error 4 - error C2664: 'ATL::CRegKey::Create' : cannot convert parameter 2 from 'const char [27]' to 'LPCTSTR'

```cpp
if( objReg.Create(HKEY_LOCAL_MACHINE,"SOFTWARE\\EClient\\") == ERROR_SUCCESS )
```

**Solution:**

```cpp
if( objReg.Create(HKEY_LOCAL_MACHINE,_T("SOFTWARE\\ EClient \\")) == ERROR_SUCCESS )
```

##### Error 5 - error C2664: 'MessageBoxW' : cannot convert parameter 2 from 'const char [8]' to 'LPCWSTR'

MessageBox(NULL,"success","Job Transfer",MB_OK);

**Solution:**

MessageBox(NULL,\_T("success"),\_T("Job Transfer"),MB_OK);

##### Error 7 - error C2664: `void ATL::CStringT<BaseType,StringTraits>::Format(const wchar_t_,...)` : cannot convert parameter 1 from 'const char [4]' to 'const wchar_t_'

CString str ; str.Format("%ld",lngError) ;

**Solution:**

CString str ; str.Format(\_T("%ld"),lngError) ;

##### Error 8 - error C2664: 'atof' : cannot convert parameter 1 from 'class CString' to 'const char \*'

\*fltUVTarget=(float)atof(CString(bstrValue));

**Solution:**

```cpp
USES_CONVERSION ;
LPCSTR strval = W2A(bstrValue);
*fltUVTarget=(float)atof(strval);
```

## error code 3867

```cpp
class A
{
public:
 int Test(void);
};

void fun(int (A::*test) (void));

int main()
{
 fun(A::Test);//C3867 error in VC
 return 0;
}
```

**Reason:**
To create a pointer to a member function, the address of operator (&) must be used with the fully qualified name of the method. Not having to use the & operator and the fully qualified name of the method lead to logic bugs in code due missing parenthesis in function calls.

**Solution:**
Add &.
fun(&A::Test);

## error 2039 'ReadHuge' : is not a member of 'CFile'

objJobFile.ReadHuge(pData,dwFileLength) ;

**Solution**
objJobFile.Read(pData,dwFileLength) ;

## error C2065: 'i' : undeclared identifier

**Reason:**
As the variable was not declared in the for loop.

```cpp
for(i = 0; i<10; i++)
{
}
```

**Solution**

```cpp
for(int i = 0; i<10; i++)
{
}
```

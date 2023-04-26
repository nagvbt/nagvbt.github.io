---
title: "Hash Data using Win32 API through a CHashDataProvider class"
date: "2012-03-15"
categories: 
  - "windows-apps"
tags: 
  - "win32"
---

Cryptography is the use of codes to convert data so that only a specific recipient will be able to read it. Microsoft provide win32 API to Hash Data/string. The class CHashDataProvider developed to provides simple function HashData(ALG\_ID algorithmID, LPCTSTR plainText, LPTSTR hashedText); which takes algorithmID and inputText to convert plainText to hashedText

ALG\_ID algorithmID - Algorithm ID to be used LPCTSTR plainText - plainText that to be converted to hashedText LPTSTR hashedText - Hashed Test using the input algorithmID[](https://skydrive.live.com/embed?cid=A4632B15B9474D67&resid=A4632B15B9474D67%21453&authkey=AHGOllrxlwl3EGM)

[](https://skydrive.live.com/embed?cid=A4632B15B9474D67&resid=A4632B15B9474D67%21453&authkey=AHGOllrxlwl3EGM)

[](https://skydrive.live.com/embed?cid=A4632B15B9474D67&resid=A4632B15B9474D67%21453&authkey=AHGOllrxlwl3EGM)

**CHashDataProvider Code**

HashDataProvider.h

```c
#include &lt;wincrypt.h&gt;
#define BUFFER\_SIZE 256

class CHashDataProvider
{
public:
    CHashDataProvider(void);
    ~CHashDataProvider(void);

private:
    // Handle to a cryptographic service provider (CSP)
    HCRYPTPROV  m\_hProv;

    // Handle to the hash object needed to create a hash.
    HCRYPTHASH  m\_hHash;

    // Pointer to the hash.
    PBYTE       m\_pbHash;

private:
    void FreeResources();
    void InitializeData();
    LPTSTR FormatData(PBYTE pbHash, DWORD dwDataLen, LPTSTR hashedText);

public:
    bool HashData(ALG\_ID  algorithmID, LPCTSTR plainText, LPTSTR  hashedText);
};
```

HashDataProvider.cpp

```c
#include "HashDataProvider.h"

CHashDataProvider::CHashDataProvider(void)
{
    InitializeData();
}

CHashDataProvider::~CHashDataProvider(void)
{
}

//\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    // des:    Hashes data based on the ALG\_ID
    // return: Hashing of the text is sucessful or not
    //\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
bool
CHashDataProvider::HashData(ALG\_ID  algorithmID, // in | Algorithm ID (Sha1 or MD5 )
                            LPCTSTR plainText,   // in | Original string to be hashed
                            LPTSTR  hashedText)    //out | string to store hashed text
{
    InitializeData();

    bool        rc          = true;      // Default is success
    DWORD       dwDataLen   = 0;         // Length, in bytes, of the hash.

    //--------------------------------------------------------------------
    // Acquire a handle to the default RSA cryptographic service provider.
    if (!CryptAcquireContext(
        &amp;m\_hProv,                 // handle of the CSP
        NULL,                     // key container name
        NULL,                     // CSP name
        PROV\_RSA\_FULL,            // provider type
        CRYPT\_VERIFYCONTEXT))     // no key access is requested
    {
        AfxMessageBox("Error in AcquireContext 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    if (!CryptCreateHash(
        m\_hProv,                  // handle of the CSP
        algorithmID,              // hash algorithm to use
        0,                        // hash key
        0,                        // reserved
        &amp;m\_hHash))                // address of hash object handle
    {
        AfxMessageBox("Error in CryptCreateHash 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    if (!CryptHashData(
        m\_hHash,                  // handle of the hash object
        (const BYTE \*) plainText, // text to be hash
        \_tcslen(plainText)\*sizeof(TCHAR), // number of bytes of data
        0))                       // flags
    {
        AfxMessageBox("Error in CryptHashData 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    if (!CryptGetHashParam(
        m\_hHash,                 // handle of the HMAC hash object
        HP\_HASHVAL,              // query on the hash value
        NULL,                    // pointer to the HMAC hash value
        &amp;dwDataLen,              // length,in bytes, of the hash
        0))
    {
        AfxMessageBox("Error in CryptGetHashParam 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    m\_pbHash = (BYTE\*)malloc(dwDataLen);
    if(NULL == m\_pbHash)
    {
       AfxMessageBox("unable to allocate memoryn");
       rc = false;
       FreeResources();
    }

    if (!CryptGetHashParam(
        m\_hHash,                   // handle of the HMAC hash object
        HP\_HASHVAL,                // query on the hash value
        m\_pbHash,                  // pointer to the HMAC hash value
        &amp;dwDataLen,                // length,in bytes, of the hash
        0))
    {
        AfxMessageBox("Error in CryptGetHashParam 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    hashedText = FormatData(m\_pbHash, dwDataLen, hashedText);

    FreeResources();

    return rc;
}

//Helper functions
void CHashDataProvider::FreeResources()
{
    if(m\_hHash)
        CryptDestroyHash(m\_hHash);
    if(m\_hProv)
        CryptReleaseContext(m\_hProv, 0);
    if(m\_pbHash)
       free(m\_pbHash);
}

void CHashDataProvider::InitializeData()
{
    m\_hProv = NULL;
    m\_hHash = NULL;
    m\_pbHash = NULL;
}

LPTSTR CHashDataProvider::FormatData(PBYTE pbHash, DWORD dwDataLen, LPTSTR hashedText)
{
    TCHAR rstData\[BUFFER\_SIZE\]= {0}; // Buffer to receive hashed result
    TCHAR tmpBuffer\[3\] = {0};
    for (DWORD i = 0 ; i &lt; dwDataLen ; i++)
    {
        tmpBuffer\[0\] = 0;
        tmpBuffer\[1\] = 0;
        tmpBuffer\[2\] = 0;
        \_stprintf\_s(tmpBuffer, \_T("%2.2x"), pbHash\[i\]);
        \_tcscat\_s(rstData, tmpBuffer);
    }
    \_tcscpy(hashedText, rstData);

    return hashedText;
}
```

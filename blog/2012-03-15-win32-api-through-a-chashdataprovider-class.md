---
tags: ["win32"]
---

# Hash Data using Win32 API through a CHashDataProvider class
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025 MD052-->
Cryptography is the use of codes to convert data so that only a specific recipient will be able to read it. Microsoft provide win32 API to Hash Data/string. The class CHashDataProvider developed to provides simple function HashData(ALG_ID algorithmID, LPCTSTR plainText, LPTSTR hashedText); which takes algorithmID and inputText to convert plainText to hashedText

ALG_ID algorithmID - Algorithm ID to be used LPCTSTR plainText - plainText that to be converted to hashedText LPTSTR hashedText - Hashed Test using the input algorithmID.

**CHashDataProvider Code**

***HashDataProvider.h***

```cpp
#include <wincrypt.h>;
#define BUFFER_SIZE 256

class CHashDataProvider
{
public:
    CHashDataProvider(void);
    ~CHashDataProvider(void);

private:
    // Handle to a cryptographic service provider (CSP)
    HCRYPTPROV  m_hProv;

    // Handle to the hash object needed to create a hash.
    HCRYPTHASH  m_hHash;

    // Pointer to the hash.
    PBYTE       m_pbHash;

private:
    void FreeResources();
    void InitializeData();
    LPTSTR FormatData(PBYTE pbHash, DWORD dwDataLen, LPTSTR hashedText);

public:
    bool HashData(ALG_ID  algorithmID, LPCTSTR plainText, LPTSTR  hashedText);
};
```

***HashDataProvider.cpp***

```cpp
#include "HashDataProvider.h"

CHashDataProvider::CHashDataProvider(void)
{
    InitializeData();
}

CHashDataProvider::~CHashDataProvider(void)
{
}

//\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
// des:    Hashes data based on the ALG_ID
// return: Hashing of the text is sucessful or not
//\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
bool
CHashDataProvider::HashData(ALG_ID  algorithmID, // in | Algorithm ID (Sha1 or MD5 )
                            LPCTSTR plainText,   // in | Original string to be hashed
                            LPTSTR  hashedText)    //out | string to store hashed text
{
    InitializeData();

    bool        rc          = true;      // Default is success
    DWORD       dwDataLen   = 0;         // Length, in bytes, of the hash.

    //--------------------------------------------------------------------
    // Acquire a handle to the default RSA cryptographic service provider.
    if (!CryptAcquireContext(
        &amp;m_hProv,                 // handle of the CSP
        NULL,                     // key container name
        NULL,                     // CSP name
        PROV_RSA_FULL,            // provider type
        CRYPT_VERIFYCONTEXT))     // no key access is requested
    {
        AfxMessageBox("Error in AcquireContext 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    if (!CryptCreateHash(
        m_hProv,                  // handle of the CSP
        algorithmID,              // hash algorithm to use
        0,                        // hash key
        0,                        // reserved
        &amp;m_hHash))                // address of hash object handle
    {
        AfxMessageBox("Error in CryptCreateHash 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    if (!CryptHashData(
        m_hHash,                  // handle of the hash object
        (const BYTE *) plainText, // text to be hash
        _tcslen(plainText)*sizeof(TCHAR), // number of bytes of data
        0))                       // flags
    {
        AfxMessageBox("Error in CryptHashData 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    if (!CryptGetHashParam(
        m_hHash,                 // handle of the HMAC hash object
        HP_HASHVAL,              // query on the hash value
        NULL,                    // pointer to the HMAC hash value
        &amp;dwDataLen,              // length,in bytes, of the hash
        0))
    {
        AfxMessageBox("Error in CryptGetHashParam 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    m_pbHash = (BYTE\*)malloc(dwDataLen);
    if(NULL == m_pbHash)
    {
       AfxMessageBox("unable to allocate memoryn");
       rc = false;
       FreeResources();
    }

    if (!CryptGetHashParam(
        m_hHash,                   // handle of the HMAC hash object
        HP_HASHVAL,                // query on the hash value
        m_pbHash,                  // pointer to the HMAC hash value
        &amp;dwDataLen,                // length,in bytes, of the hash
        0))
    {
        AfxMessageBox("Error in CryptGetHashParam 0x%08x n", GetLastError());
        rc = false;
        FreeResources();
    }

    hashedText = FormatData(m_pbHash, dwDataLen, hashedText);

    FreeResources();

    return rc;
}

//Helper functions
void CHashDataProvider::FreeResources()
{
    if(m_hHash)
        CryptDestroyHash(m_hHash);
    if(m_hProv)
        CryptReleaseContext(m_hProv, 0);
    if(m_pbHash)
       free(m_pbHash);
}

void CHashDataProvider::InitializeData()
{
    m_hProv = NULL;
    m_hHash = NULL;
    m_pbHash = NULL;
}

LPTSTR CHashDataProvider::FormatData(PBYTE pbHash, DWORD dwDataLen, LPTSTR hashedText)
{
    TCHAR rstData[BUFFER_SIZE]= {0}; // Buffer to receive hashed result
    TCHAR tmpBuffer[3] = {0};
    for (DWORD i = 0 ; i &lt; dwDataLen ; i++)
    {
        tmpBuffer[0] = 0;
        tmpBuffer[1] = 0;
        tmpBuffer[2] = 0;
        _stprintf_s(tmpBuffer, _T("%2.2x"), pbHash\[i\]);
        _tcscat_s(rstData, tmpBuffer);
    }
    _tcscpy(hashedText, rstData);

    return hashedText;
}
```

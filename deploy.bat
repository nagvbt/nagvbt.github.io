::===============================================================
:: Sets the GIT_USER and USE_SSH amd does the deploy in github.io
::
::===============================================================


set GIT_USER=nagvbt

:: echo %GIT_USER%

set USE_SSH=false

:: echo %USE_SSH%

:: Deploy
yarn deploy


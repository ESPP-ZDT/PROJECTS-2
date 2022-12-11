@Echo BIN delete
FOR /F "tokens=*" %%G IN ('DIR /B /AD /S bin') DO RMDIR /S /Q "%%G"
@cls
@echo OBJ delete
FOR /F "tokens=*" %%G IN ('DIR /B /AD /S obj') DO RMDIR /S /Q "%%G"
@cls
@echo PACKAGES delete
FOR /F "tokens=*" %%G IN ('DIR /B /AD /S packages') DO RMDIR /S /Q "%%G"
@cls
@echo NODE delete
FOR /F "tokens=*" %%G IN ('DIR /B /AD /S node_modules') DO RMDIR /S /Q "%%G"
@echo press any key
pasue


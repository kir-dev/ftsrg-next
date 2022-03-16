@echo off
"" > logo-data.txt
for %%i in (*.jpg *.png *.jpeg *.bmp *.gif) do ( echo ^"%%~nxi^", >> logo-data.txt ) 
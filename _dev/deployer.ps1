#move ^
Write-Host "> Moving up..."
cd ..


#clean files
$critical_files = @('_dev', '.git', '.gitignore')
Write-Host "> Cleaning..."
foreach ($file in Get-ChildItem) {
    if (-Not ($critical_files -Match $file.Name) ) {
        Write-Host ">> removing $($file.Name)..."
        Remove-Item $file.Name -Recurse -Force -Confirm:$false
    }
}


Write-Host "> Moving back..."
cd _dev


#run the regular build, which will output to \dist
Write-Host "> Building..."
Invoke-Expression -Command "npm run build"

#copy files into root
Write-Host "> Copying Files..."
Copy-Item -Path ".\dist\*" -Destination ".\.." -Recurse


Write-Host "> Done!"

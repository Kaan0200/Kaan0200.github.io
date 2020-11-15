$critical_files = @('_dev', '.git', '.gitignore')


#run the regular build, which will output to \dist
#vue-cli-service build

#move ^
Write-Host "Moving up..."
cd ..

foreach ($file in Get-ChildItem) {
    if (-Not ($critical_files -Match $file.Name) ) {
        Write-Host $file.Name
    }
}

Write-Host "Moving back..."
cd _dev
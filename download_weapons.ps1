# PowerShell script to download remaining weapon images
Set-Location "C:\Users\Martin\Desktop\project"

# Define weapon URLs with correct CS2 inventory images
$weapons = @{
    "sg-553.jpg" = "https://static.wikia.nocookie.net/cswikia/images/c/c1/CS2_SG_553_Inventory.png"
    "nova.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_Nova_Inventory.png"
    "xm1014.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_XM1014_Inventory.png"
    "m249.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_M249_Inventory.png"
    "ssg-08.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_SSG_08_Inventory.png"
    "scar-20.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_SCAR-20_Inventory.png"
    "g3sg1.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_G3SG1_Inventory.png"
    "smoke-grenade.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_Smoke_Grenade_Inventory.png"
    "flashbang.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_Flashbang_Inventory.png"
    "molotov.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_Molotov_Inventory.png"
    "he-grenade.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_HE_Grenade_Inventory.png"
    "decoy-grenade.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_Decoy_Grenade_Inventory.png"
    "zeus-x27.jpg" = "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_Zeus_x27_Inventory.png"
}

# Download each weapon
foreach ($weapon in $weapons.GetEnumerator()) {
    $filename = $weapon.Key
    $url = $weapon.Value
    $outputPath = "img/weapons/$filename"

    Write-Host "Downloading $filename..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
        Write-Host "✅ Successfully downloaded $filename" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Failed to download $filename : $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Download process completed!" -ForegroundColor Cyan

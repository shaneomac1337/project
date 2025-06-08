# PowerShell script to download ALL MISSING WWE game covers from The SmackDown Hotel
# This script downloads the missing games that were not included in the original collection

$urls = @{
    # MISSING GAMES - PG Era/Brand Extension Era
    "wwe-12-2011.jpg" = "https://www.thesmackdownhotel.com/igallery/1301-1400/WWE12_Cover-1325-1920.jpg"
    "wwe-13-2012.jpg" = "https://www.thesmackdownhotel.com/igallery/1701-1800/WWE13_Cover_Official-1755-1920.jpg"
    
    # MISSING GAMES - Modern Era (2K Series)
    "wwe-2k17-2016.jpg" = "https://www.thesmackdownhotel.com/igallery/8401-8500/WWE-2K17-Cover-Agnostic-8426-1920.jpg"
    "wwe-2k18-2017.jpg" = "https://www.thesmackdownhotel.com/igallery/12601-12700/WWE_2K18_Cover_Agnostic-12616-1920.jpg"
    "wwe-2k19-2018.jpg" = "https://www.thesmackdownhotel.com/igallery/15001-15100/WWE_2K19_Cover_Agnostic-15100-1920.jpg"
    "wwe-2k20-2019.jpg" = "https://www.thesmackdownhotel.com/igallery/16801-16900/WWE_2K20_Standard_Edition_Cover_US-16869-1920.jpg"
    "wwe-2k22-2022.jpg" = "https://www.thesmackdownhotel.com/igallery/19301-19400/wwe-2k22-cover-19335-1920.jpg"
    "wwe-2k23-2023.jpg" = "https://www.thesmackdownhotel.com/igallery/19801-19900/wwe-2k23-standard-edition-key-art-19826-1920.jpg"
    "wwe-2k24-2024.jpg" = "https://www.thesmackdownhotel.com/igallery/wwe-2k24-covers-17/wwe-2k24-cover-standard-edition-1920.jpg"
    "wwe-2k25-2025.jpg" = "https://www.thesmackdownhotel.com/igallery/wwe-2k25-cover-art-294/wwe2k25-cover-standard-edition-roman-reigns-1920.jpg"
}

$outputDir = "C:\Users\Martin\Desktop\project\img\wwe-covers"
$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0"
    "Accept" = "image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5"
    "Accept-Language" = "en-US,en;q=0.5"
    "Accept-Encoding" = "gzip, deflate, br"
    "Referer" = "https://www.thesmackdownhotel.com/"
    "Sec-Fetch-Dest" = "image"
    "Sec-Fetch-Mode" = "no-cors"
    "Sec-Fetch-Site" = "same-origin"
}

Write-Host "Downloading MISSING WWE game covers..." -ForegroundColor Green
Write-Host "Missing covers to download: $($urls.Count)" -ForegroundColor Cyan

$downloaded = 0
$skipped = 0
$failed = 0

foreach ($filename in $urls.Keys) {
    $url = $urls[$filename]
    $outputPath = Join-Path $outputDir $filename
    
    # Check if file already exists
    if (Test-Path $outputPath) {
        Write-Host "SKIPPED: $filename (already exists)" -ForegroundColor Yellow
        $skipped++
        continue
    }
    
    try {
        Write-Host "Downloading: $filename" -ForegroundColor Cyan
        Invoke-WebRequest -Uri $url -OutFile $outputPath -Headers $headers -UseBasicParsing
        Write-Host "Downloaded: $filename" -ForegroundColor Green
        $downloaded++
    }
    catch {
        Write-Host "Failed to download: $filename" -ForegroundColor Red
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host "=== MISSING COVERS DOWNLOAD SUMMARY ===" -ForegroundColor Magenta
Write-Host "Downloaded: $downloaded" -ForegroundColor Green
Write-Host "Skipped: $skipped" -ForegroundColor Yellow
Write-Host "Failed: $failed" -ForegroundColor Red
Write-Host "Total missing covers: $($urls.Count)" -ForegroundColor Cyan
Write-Host ""
Write-Host "Missing WWE game covers download complete!" -ForegroundColor Green
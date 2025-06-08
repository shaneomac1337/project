# PowerShell script to download WWE game covers from The SmackDown Hotel
# This script downloads the images with proper headers to avoid hotlinking protection

$urls = @{
    "wwf-smackdown-1999.jpg" = "https://www.thesmackdownhotel.com/igallery/sd-1-covers/wwf-smackdown-1-cover-1920.jpg"
    "wwe-smackdown-hctp-2003.jpg" = "https://www.thesmackdownhotel.com/igallery/sd-hctp-covers/smackdown-hctp-cover-us-1920.jpg"
    "wwe-smackdown-vs-raw-2004.jpg" = "https://www.thesmackdownhotel.com/igallery/svr-2005-covers/svr-cover-1920.jpg"
    "wwe-smackdown-vs-raw-2006.jpg" = "https://www.thesmackdownhotel.com/igallery/svr-2006-covers/svr2006-cover-1920.jpg"
    "wwe-smackdown-vs-raw-2007.jpg" = "https://www.thesmackdownhotel.com/igallery/svr-2007-covers/ps2-us-cover-1920.jpg"
    "wwe-2k14-2013.jpg" = "https://www.thesmackdownhotel.com/igallery/2401-2500/WWE2K14_Cover_Official-2465-1920.jpg"
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

Write-Host "Downloading WWE game covers..." -ForegroundColor Green

foreach ($filename in $urls.Keys) {
    $url = $urls[$filename]
    $outputPath = Join-Path $outputDir $filename
    
    try {
        Write-Host "Downloading: $filename" -ForegroundColor Yellow
        Invoke-WebRequest -Uri $url -OutFile $outputPath -Headers $headers -UseBasicParsing
        Write-Host "Downloaded: $filename" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download: $filename" -ForegroundColor Red
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Download complete!" -ForegroundColor Green
# PowerShell script to download ALL WWE game covers from The SmackDown Hotel
# This script downloads all the remaining images with proper headers to avoid hotlinking protection

$urls = @{
    # Already downloaded (keeping for reference)
    "wwf-smackdown-1999.jpg" = "https://www.thesmackdownhotel.com/igallery/sd-1-covers/wwf-smackdown-1-cover-1920.jpg"
    "wwe-smackdown-hctp-2003.jpg" = "https://www.thesmackdownhotel.com/igallery/sd-hctp-covers/smackdown-hctp-cover-us-1920.jpg"
    "wwe-smackdown-vs-raw-2004.jpg" = "https://www.thesmackdownhotel.com/igallery/svr-2005-covers/svr-cover-1920.jpg"
    "wwe-smackdown-vs-raw-2006.jpg" = "https://www.thesmackdownhotel.com/igallery/svr-2006-covers/svr2006-cover-1920.jpg"
    "wwe-smackdown-vs-raw-2007.jpg" = "https://www.thesmackdownhotel.com/igallery/svr-2007-covers/ps2-us-cover-1920.jpg"
    "wwe-2k14-2013.jpg" = "https://www.thesmackdownhotel.com/igallery/2401-2500/WWE2K14_Cover_Official-2465-1920.jpg"
    
    # NEW DOWNLOADS - Missing games
    "wwf-smackdown-2-kyr-2000.jpg" = "https://www.thesmackdownhotel.com/igallery/sd-kyr-covers/smackdown-2-kyr-cover-us-1920.jpg"
    "wwf-smackdown-jbi-2001.jpg" = "https://www.thesmackdownhotel.com/igallery/sd-jbi-covers/smackdown-jbi-cover-1920.jpg"
    "wwe-smackdown-sym-2002.jpg" = "https://www.thesmackdownhotel.com/igallery/sd-sym-covers/smackdown-sym-cover-us-1920.jpg"
    "wwe-smackdown-vs-raw-2008.jpg" = "https://www.thesmackdownhotel.com/igallery/svr-2008-covers/svr2008-cover-1920.jpg"
    "wwe-smackdown-vs-raw-2009.jpg" = "https://www.thesmackdownhotel.com/igallery/5301-5400/SvR2009-Cover-5365-1920.jpg"
    "wwe-smackdown-vs-raw-2010.jpg" = "https://www.thesmackdownhotel.com/igallery/1701-1800/SvR2010_Cover-1726-1920.jpg"
    "wwe-smackdown-vs-raw-2011.jpg" = "https://www.thesmackdownhotel.com/igallery/401-500/SvR2011_Cover_USA-477-1920.jpg"
    "wwe-2k15-2014.jpg" = "https://www.thesmackdownhotel.com/igallery/2501-2600/WWE2K15_Cover_Official-2600-1920.jpg"
    "wwe-2k16-2015.jpg" = "https://www.thesmackdownhotel.com/igallery/3001-3100/WWE_2K16_COVER_AGNOSTIC_ENG-3006-1920.jpg"
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

Write-Host "Downloading ALL WWE game covers..." -ForegroundColor Green
Write-Host "Total covers to download: $($urls.Count)" -ForegroundColor Cyan

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
Write-Host "=== DOWNLOAD SUMMARY ===" -ForegroundColor Magenta
Write-Host "Downloaded: $downloaded" -ForegroundColor Green
Write-Host "Skipped: $skipped" -ForegroundColor Yellow
Write-Host "Failed: $failed" -ForegroundColor Red
Write-Host "Total files: $($urls.Count)" -ForegroundColor Cyan
Write-Host ""
Write-Host "All WWE game covers download complete!" -ForegroundColor Green
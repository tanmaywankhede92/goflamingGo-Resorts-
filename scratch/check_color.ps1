Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap('scratch/frame_1.jpg')
$c = $bmp.GetPixel(50, 50)
$c2 = $bmp.GetPixel(1200, 50)
$c3 = $bmp.GetPixel(600, 20)
Write-Output ("HEX 50,50: #{0:X2}{1:X2}{2:X2}" -f $c.R, $c.G, $c.B)
Write-Output ("HEX 1200,50: #{0:X2}{1:X2}{2:X2}" -f $c2.R, $c2.G, $c2.B)
Write-Output ("HEX 600,20: #{0:X2}{1:X2}{2:X2}" -f $c3.R, $c3.G, $c3.B)
$bmp.Dispose()

Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap('scratch/frame_1.jpg')
Write-Output ("Right edge 1279, 360: #{0:X2}{1:X2}{2:X2}" -f $bmp.GetPixel(1279, 360).R, $bmp.GetPixel(1279, 360).G, $bmp.GetPixel(1279, 360).B)
Write-Output ("Bottom edge 640, 719: #{0:X2}{1:X2}{2:X2}" -f $bmp.GetPixel(640, 719).R, $bmp.GetPixel(640, 719).G, $bmp.GetPixel(640, 719).B)
Write-Output ("Corner 1279, 719: #{0:X2}{1:X2}{2:X2}" -f $bmp.GetPixel(1279, 719).R, $bmp.GetPixel(1279, 719).G, $bmp.GetPixel(1279, 719).B)
Write-Output ("Pixel 1278, 360: #{0:X2}{1:X2}{2:X2}" -f $bmp.GetPixel(1278, 360).R, $bmp.GetPixel(1278, 360).G, $bmp.GetPixel(1278, 360).B)
Write-Output ("Pixel 640, 718: #{0:X2}{1:X2}{2:X2}" -f $bmp.GetPixel(640, 718).R, $bmp.GetPixel(640, 718).G, $bmp.GetPixel(640, 718).B)
$bmp.Dispose()

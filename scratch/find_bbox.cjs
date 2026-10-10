const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

// Let's check bounding box of logo in frame_2.jpg (when all text is fully visible)
const bmpScript = `
Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap('scratch/frame_2.jpg')
$bgR = 0xF6; $bgG = 0xF4; $bgB = 0xE8;

$minX = 1280; $maxX = 0; $minY = 720; $maxY = 0;

for ($y = 0; $y -lt 720; $y++) {
    for ($x = 0; $x -lt 1280; $x++) {
        $c = $bmp.GetPixel($x, $y)
        $diff = [Math]::Abs($c.R - $bgR) + [Math]::Abs($c.G - $bgG) + [Math]::Abs($c.B - $bgB)
        if ($diff -gt 25) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
$bmp.Dispose()
Write-Output ("Logo Bounding Box: X=[$minX, $maxX], Y=[$minY, $maxY]")
Write-Output ("Width: " + ($maxX - $minX) + ", Height: " + ($maxY - $minY))
`;
require('fs').writeFileSync('scratch/find_bbox.ps1', bmpScript);
const out = execSync('powershell -ExecutionPolicy Bypass -File scratch/find_bbox.ps1').toString();
console.log(out);

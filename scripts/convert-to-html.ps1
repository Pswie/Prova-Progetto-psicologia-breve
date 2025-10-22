# Script per convertire tutti gli articoli MDX da Markdown a HTML
# Mantiene il contenuto identico, converte solo la formattazione

$articoliPath = "h:\Siti_cmt\Prova-Progetto-psicologia-breve\content\articoli"
$files = Get-ChildItem -Path $articoliPath -Filter "*.mdx"

Write-Host "Trovati $($files.Count) file da processare..." -ForegroundColor Cyan

$convertedCount = 0
$skippedCount = 0

foreach ($file in $files) {
    Write-Host "`nProcessando: $($file.Name)" -ForegroundColor Yellow
    
    # Leggi il contenuto del file
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Verifica se il file ha già tag HTML (skip se già convertito)
    if ($content -match '<p>.*?</p>') {
        Write-Host "  ✓ Già convertito in HTML - Skip" -ForegroundColor Green
        $skippedCount++
        continue
    }
    
    # Separa frontmatter da body
    $parts = $content -split '---', 3
    
    if ($parts.Count -lt 3) {
        Write-Host "  ✗ Formato non valido - Skip" -ForegroundColor Red
        $skippedCount++
        continue
    }
    
    $frontmatter = $parts[1]
    $body = $parts[2].Trim()
    
    # Verifica se c'è contenuto da convertire
    if ([string]::IsNullOrWhiteSpace($body)) {
        Write-Host "  ✗ Body vuoto - Skip" -ForegroundColor Red
        $skippedCount++
        continue
    }
    
    # Converti i paragrafi in HTML
    # Split per doppio newline (paragrafi separati)
    $paragraphs = $body -split "`r?`n`r?`n" | Where-Object { $_.Trim() -ne "" }
    
    $htmlParagraphs = @()
    
    foreach ($para in $paragraphs) {
        # Pulisci il paragrafo
        $cleanPara = $para.Trim()
        
        # Skip righe vuote
        if ([string]::IsNullOrWhiteSpace($cleanPara)) {
            continue
        }
        
        # Skip se è già un tag HTML
        if ($cleanPara -match '^<[^>]+>') {
            $htmlParagraphs += $cleanPara
            continue
        }
        
        # Skip separatori ---
        if ($cleanPara -match '^---+$') {
            $htmlParagraphs += "`n$cleanPara`n"
            continue
        }
        
        # Skip headers Markdown (##, ###, ecc.)
        if ($cleanPara -match '^#+\s') {
            $htmlParagraphs += "`n$cleanPara`n"
            continue
        }
        
        # Skip liste Markdown (-, *, numeri)
        if ($cleanPara -match '^[\*\-\d]+[\.\)]\s') {
            $htmlParagraphs += "`n$cleanPara`n"
            continue
        }
        
        # Skip blockquotes
        if ($cleanPara -match '^>') {
            $htmlParagraphs += "`n$cleanPara`n"
            continue
        }
        
        # Skip firma autore **Dott...
        if ($cleanPara -match '^\*\*Dott\.') {
            $htmlParagraphs += "`n$cleanPara`n"
            continue
        }
        
        # Converti paragrafo normale in <p>
        # Gestisci i singoli newline all'interno del paragrafo (rimuovili)
        $singleLinePara = $cleanPara -replace "`r?`n", " "
        $singleLinePara = $singleLinePara -replace "\s+", " "
        
        $htmlParagraphs += "<p>$singleLinePara</p>"
    }
    
    # Ricostruisci il file
    $newBody = $htmlParagraphs -join "`n`n"
    $newContent = "---`n$frontmatter---`n`n$newBody"
    
    # Salva il file
    try {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
        Write-Host "  ✓ Convertito con successo" -ForegroundColor Green
        $convertedCount++
    }
    catch {
        Write-Host "  ✗ Errore durante il salvataggio: $_" -ForegroundColor Red
        $skippedCount++
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Conversione completata!" -ForegroundColor Cyan
Write-Host "File convertiti: $convertedCount" -ForegroundColor Green
Write-Host "File saltati: $skippedCount" -ForegroundColor Yellow
Write-Host "========================================`n" -ForegroundColor Cyan

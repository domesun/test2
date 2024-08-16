function showCharacter(character) {
    // ボタンを押すとその文字を表示
    document.getElementById('main').style.display = 'none';
    document.getElementById('display').style.display = 'block';
    document.getElementById('characterDisplay').textContent = character;
    
    // 文字ごとに色を設定
    switch(character) {
        case 'A':
            document.getElementById('characterDisplay').style.color = '#ff9999';
            break;
        case 'B':
            document.getElementById('characterDisplay').style.color = '#99ccff';
            break;
        case 'C':
            document.getElementById('characterDisplay').style.color = '#99ff99';
            break;
        case 'D':
            document.getElementById('characterDisplay').style.color = '#ffcc99';
            break;
    }
}

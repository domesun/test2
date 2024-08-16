function showCharacter(character) {
    // ボタンを押すとその文字を表示
    document.getElementById('main').style.display = 'none';
    document.getElementById('display').style.display = 'block';
    document.getElementById('characterDisplay').textContent = character;
    
    // 文字と背景色ごとに色を設定
    switch(character) {
        case 'A':
            document.getElementById('characterDisplay').style.color = '#ff0000';
            document.body.style.backgroundColor = '#ff9999';  // 背景色をAの色に
            break;
        case 'B':
            document.getElementById('characterDisplay').style.color = '#0000ff';
            document.body.style.backgroundColor = '#99ccff';  // 背景色をBの色に
            break;
        case 'C':
            document.getElementById('characterDisplay').style.color = '#008000';
            document.body.style.backgroundColor = '#99ff99';  // 背景色をCの色に
            break;
        case 'D':
            document.getElementById('characterDisplay').style.color = '#ff4500';
            document.body.style.backgroundColor = '#ffcc99';  // 背景色をDの色に
            break;
    }
}

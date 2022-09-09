document.getElementById("city-copy").onclick = function() {
    this.select();
    document.execCommand('copy');
    
}

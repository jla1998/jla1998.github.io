function styleedit(){
        document.querySelector('#red').onclick = function(){
            document.querySelector('body').style.backgroundColor = 'red';
        }
        document.querySelector('#green').onclick = function(){
            document.querySelector('body').style.backgroundColor = 'green';
        }
        document.querySelector('#blue').onclick = function(){
            document.querySelector('body').style.backgroundColor = 'blue';
        }
        document.querySelector('select').onclick = function(){
            document.querySelector('p').style.fontSize = this.value;
        }
}